// SPDX-License-Identifier: MIT

import "@openzeppelin/contracts/access/Ownable.sol";
import "@openzeppelin/contracts/security/Pausable.sol";
import "@openzeppelin/contracts/security/ReentrancyGuard.sol";

pragma solidity 0.8.17;

contract ClaimContract is Ownable, Pausable, ReentrancyGuard {
    uint256 public pointsClaimed;
    uint256 public transactionCount;
    mapping(address => bool) public claimedTokens;
    mapping(address => uint256) public userPoints;
    mapping(address => address) public ref;

    event LogClaim(
        uint256 txId,
        uint256 timeStamp,
        address indexed user,
        uint256 indexed ethBalance,
        address indexed refAddress,
        uint256 refPoints
    );

    constructor() {}

    function pause() public onlyOwner {
        _pause();
    }

    function unpause() public onlyOwner {
        _unpause();
    }

    function claim() external whenNotPaused nonReentrant {
        address from = msg.sender;
        require(
            claimedTokens[from] == false,
            "You have already claimed points"
        );
        userPoints[from] = 1;
        pointsClaimed += 1;
        transactionCount++;
        claimedTokens[from] = true;
        emit LogClaim(
            transactionCount,
            block.timestamp,
            from,
            from.balance,
            address(this),
            0
        );
    }

    function refClaim(address _ref) external whenNotPaused nonReentrant {
        address from = msg.sender;
        require(
            claimedTokens[from] == false,
            "You have already claimed points"
        );
        userPoints[from] = 1;
        if (claimedTokens[_ref] == true) {
            userPoints[_ref] += 2;
            ref[from] = _ref;
        }
        uint256 refPoints = (claimedTokens[_ref] == true) ? 2 : 0;
        uint256 totalpointsClaimed = 1 + refPoints;
        pointsClaimed += totalpointsClaimed;
        transactionCount++;
        claimedTokens[from] = true;
        emit LogClaim(
            transactionCount,
            block.timestamp,
            from,
            from.balance,
            _ref,
            userPoints[_ref]
        );
    }
}
