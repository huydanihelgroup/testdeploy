import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Ownership from './components/pages/Ownership/Ownership';
import RefOwnership from './components/pages/RefOwnership/Ownership';
// import Vault404 from './components/pages/Vault404/Vault';
import Web3 from 'web3';
import { claimContract } from './methods/claimContract';
import blockNumberCalc from './methods/blockNumberCalc';
import userHasClaimed from './methods/userHasClaimed';
import tokenCall from './methods/tokenCall';
import total from './methods/totalPoints';
import Modal from './components/atoms/Modal/Modal';
import TypoGraphy from './components/atoms/Typography/Typography';
import Button from './components/atoms/Button/Button';
import { Helmet } from 'react-helmet';
import { INavbarProps } from './components/atoms/NewNavbar/Navbar.types';
import { IFooterProps } from './components/atoms/NewFooter/Footer.types';
import { Variant } from './components/atoms/SmallCard/Card.types';
import Leaderboard from './components/pages/Leaderboard/Leaderboard';

export default function App() {
  const correctChainId = 1;
  const web3 = new Web3((window as any).ethereum);

  const [connected, setConnected] = React.useState<boolean>(false);
  const [account, setAccount] = React.useState<string | null>(null);
  const [hasClaimed, setHasClaimed] = React.useState<boolean>(false);
  const [correctNetwork, setCorrectNetwork] = React.useState<boolean>(false);
  const [claimError, setClaimError] = React.useState<String>('');
  const [errorModal, setErrorModal] = React.useState<Boolean>(false);
  const [loadingTx, setLoadingTx] = React.useState<Boolean>(false);
  const [loadingClaim, setLoadingClaim] = React.useState<boolean>(false);
  const [claimAmount, setClaimAmout] = React.useState<any>(1);
  const [ethBalance, setEthBalance] = React.useState<string>("N/A");
  const [position, closeModals] = React.useState<boolean>(false);
  const [position2, closeModals2] = React.useState<boolean>(false);
  const [status, setStatus] = React.useState<boolean>(false);
  const [blockNumber, setBlockNumber] = React.useState<number>(0);
  const [totalPoints, setTotalPoints] = React.useState<number>(0);
  const [claimedNumber, setClaimedNumber] = React.useState<number>(0);
  const [connecting, setConnecting] = React.useState<boolean>(false);
  const [refresh, setRefresh] = React.useState<boolean>(false);
  const [installed, setInstalled] = React.useState<boolean>(false);

  React.useEffect(() => {
    if (typeof window.ethereum !== 'undefined') {
      setInstalled(false);
      setRefresh(false);
      total().then((e) => {
        setTotalPoints(e);
      });
      closeModals2(detectMob());
      userHasClaimed().then((e) => {
        setHasClaimed(e);
      });
      tokenCall().then((e) => {
        setClaimedNumber(e);
      });
      blockNumberCalc().then((e) => {
        setBlockNumber(e);
      });
      // getEvents();
      (window as any).ethereum.on('accountsChanged', function (accounts: any) {
        getAccount();
        window.location.reload();
      });
      (window as any).ethereum.on('chainChanged', (chainId: any) => {
        window.location.reload();
      });
    } else {
      setInstalled(true);
    }
  }, [
    position,
    connected,
    account,
    refresh,
    loadingClaim,
    loadingTx,
    position2,
    hasClaimed,
  ]);

  function detectMob() {
    const toMatch = [
      /Android/i,
      /webOS/i,
      /iPhone/i,
      /iPad/i,
      /iPod/i,
      /BlackBerry/i,
      /Windows Phone/i,
    ];

    return toMatch.some((toMatchItem) => {
      return navigator.userAgent.match(toMatchItem);
    });
  }

  React.useEffect(() => {
    setRefresh(true);
    setRefresh(false);
  }, [account]);

  function copy() {
    const display = document.getElementById('custom-tooltip') as HTMLElement;
    display.style.display = 'inline';
    setTimeout(function () {
      const display = document.getElementById('custom-tooltip') as HTMLElement;
      navigator.clipboard.writeText(
        `https://ownership.verybanking.org/refOwnership/${account}`
      );
      display.style.display = 'none';
    }, 1000);
  }

  async function getAccount() {
    
    const accounts = await (window as any).ethereum.enable();
    const accountMetamask = accounts[0];
    setAccount(accountMetamask);
    setConnecting(false);
  }

  async function switchNetworkMetamask() {
    if ((window as any).ethereum.networkVersion !== correctChainId) {
      await (window as any).ethereum.request({
        method: 'wallet_switchEthereumChain',
        params: [
          {
            chainId: web3.utils.toHex(correctChainId),
            // chainName: 'Avalanche Mainnet C-Chain',
            // nativeCurrency: {
            //   name: 'AVAX',
            //   decimals: 18,
            // },
            // rpcUrls: ['https://api.avax.network/ext/bc/C/rpc'],
            // blockExplorerUrls: ['https://snowtrace.io/'],
          },
        ],
      });
      return true;
    }
  }

  function closeModal() {
    setClaimError('');
    setErrorModal(false);
    setLoadingTx(false);
    setLoadingClaim(false);
    setStatus(false);
    setRefresh(false);
  }

  const disconnect = () => {
    setConnected(false);
  };

  async function refClaim() {
    closeModal();
    setRefresh(false);
    const web3 = new Web3((window as any).ethereum);
    const accounts = await (window as any).ethereum.request({
      method: 'eth_requestAccounts',
    });
    const account = accounts[0];

    const isAddress = web3.utils.isAddress(window.location.href.slice(-42));
    const refferer = isAddress
      ? window.location.href.slice(-42)
      : 'Not Address';
    const claimed = await claimContract.methods.claimedTokens(account).call();
    const refClaimed = await claimContract.methods
      .claimedTokens(refferer)
      .call();
    setStatus(true);
    if (claimed === true) {
      setClaimError('This wallet has already claimed');
      setErrorModal(true);
    } else if (refClaimed === false) {
      setClaimError('The link is invalid');
      setErrorModal(true);
    } else {
      setLoadingTx(true);
      await claimContract.methods
        .refClaim(refferer)
        .send({ from: account })
        .then((validatedTransaction: any) => {
          // We alert the user that transaction was successfully validated
          setLoadingClaim(true);
          setRefresh(true);
        })
        .catch((e: { message: any }) => {
          setErrorModal(true);
          setClaimError(e.message);
        });
      setLoadingTx(false);
      setAccount(account);
    }
  }

  async function claimFunction() {
    setRefresh(false);
    closeModal();
    const web3 = new Web3((window as any).ethereum);
    const accounts = await (window as any).ethereum.request({
      method: 'eth_requestAccounts',
    });
    const account = accounts[0];
    console.log(account)
    const claimed = await claimContract.methods.claimedTokens(account).call();
    console.log(claimed)
    const allTokensClaimed = await claimContract.methods.pointsClaimed().call();
    console.log(allTokensClaimed);
    const balan = await web3.eth.getBalance(account);
    console.log(claimContract);
    const big = BigInt(balan);
    const myNumber = Math.floor(Number(big) / 10 ** 15);
    console.log("My balance: ",myNumber)
    setStatus(true);
    if (claimed === true) {
      setClaimError('This wallet has already claimed sSDEX');
      setErrorModal(true);
    } else if (myNumber === 0) {
      setClaimError('This wallet  at 12/31/2021 was 0');
      setErrorModal(true);
    } else {
      setLoadingTx(true);
      await claimContract.methods
        .claim().send({ from: account })
        .then((validatedTransaction: any) => {
          // We alert the user that transaction was successfully validated
          setLoadingClaim(true);
          setRefresh(true);
        })
        .catch((e: { message: any }) => {
          setErrorModal(true);
          setClaimError(e.message);
        });
      setLoadingTx(false);
      setAccount(account);
    }
  }

  async function calculteAmount() {
    setClaimAmout(0);
    const web3 = new Web3((window as any).ethereum);
    const accounts = await (window as any).ethereum.request({
      method: 'eth_requestAccounts',
    });
    const account = accounts[0];
    const balan = await web3.eth.getBalance(account);
    const big = BigInt(balan);
    const claim = Number(big) / 10 ** 18;
    console.log("claim",claim)
    setEthBalance(claim.toFixed(2).toString());
    return claim;
  }

  async function useConnectWallet() {
    const acc = await web3.eth.getAccounts();
    calculteAmount();
    if (acc.length === 0) {
      setConnecting(true);
      if ((window as any).ethereum.networkVersion !== correctChainId) {
        setCorrectNetwork(false);
        closeModals(true);
        switchNetworkMetamask().then(() => {
          closeModals(false);
        });
        (window as any).ethereum
          .request({
            method: 'eth_requestAccounts',
          })
          .then((accounts: string[]) => {
            setAccount(accounts[0]);
            setConnected(true);
          })
          .catch((error: any) => {
            setConnecting(true);
          });
        setConnecting(false);
      } else if ((window as any).ethereum.networkVersion === correctChainId) {
        setCorrectNetwork(true);
        (window as any).ethereum
          .request({
            method: 'eth_requestAccounts',
          })
          .then((accounts: string[]) => {
            setAccount(accounts[0]);
            setConnected(true);
            switchNetworkMetamask();
          })
          .catch((error: any) => {
            setConnecting(true);
          });
        setConnecting(false);
      }
    } else if (acc.length !== 0) {
      if ((window as any).ethereum.networkVersion !== correctChainId) {
        setCorrectNetwork(false);
        closeModals(true);
        switchNetworkMetamask().then(() => {
          closeModals(false);
        });
        (window as any).ethereum
          .request({
            method: 'eth_requestAccounts',
          })
          .then((accounts: string[]) => {
            setAccount(accounts[0]);
            setConnected(true);
          })
          .catch((error: any) => {
            setConnecting(true);
          });
        setConnecting(false);
      } else if ((window as any).ethereum.networkVersion === correctChainId) {
        setCorrectNetwork(true);
        (window as any).ethereum
          .request({
            method: 'eth_requestAccounts',
          })
          .then((accounts: string[]) => {
            setAccount(accounts[0]);
            setConnected(true);
            switchNetworkMetamask();
          })
          .catch((error: any) => {
            setConnecting(true);
          });
        setConnecting(false);
      }
    }
  }

  const navBarProps: INavbarProps = {
    rightIcon: connected ? '/Group.png' : '/Group.png',
    connect: connected
      ? disconnect
      : correctNetwork
      ? useConnectWallet
      : connected
      ? switchNetworkMetamask
      : useConnectWallet,
    variant: connected
      ? 'connected'
      : correctNetwork
      ? 'connect'
      : connected
      ? 'wrong_network'
      : 'connect',
    items: [],
    connectedText: connected
      ? account
        ? `${account.substring(0, 8)}...${account.slice(-5)}`
        : ''
      : '',
    buttonText: correctNetwork
      ? 'Connect Wallet'
      : connected
      ? 'Wrong Network'
      : 'Connect Wallet',
  };



  const footProps: IFooterProps = {
    copyRightText: '© 2022 VB',
    rightText: blockNumber.toString(),
  };
  const isAddress = web3.utils.isAddress(window.location.href.slice(-42));
  const refferer = isAddress
    ? window.location.href.slice(-42)
    : '0xf2f1410D142fBAE176ed140d56ffb282FcF054c6';

  return (
    <div className="min-h-screen  flex flex-col justify-between">
      <Helmet>
        <title>Very Banking</title>
        <meta
          name="description"
          content="Use Very Banking products to exchange assets and earn rewards through DeFi 3.0 initiatives"
        />
        <meta property="og:title" content="Very Banking" />
        <meta property="og:image" content="/open-graph2.jpg" />
        <link rel="icon" type="image/png" sizes="32x32" href="/50x50.png" />
        <link rel="icon" type="image/png" sizes="96x96" href="/200x200.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/256.png" />
        <link rel="manifest" href="/manifest.json" />
        <meta name="msapplication-TileColor" content="#ffffff" />
        <meta name="msapplication-TileImage" content="/ms-icon-144x144.png" />
        <meta name="theme-color" content="#ffffff"></meta>
      </Helmet>
      <div className="">
        <Routes>
          <Route
            path="/"
            element={
              <>
                {' '}
                <Ownership
                  navbarProps={navBarProps}
                  footerProps={footProps}
                  percent={((claimedNumber / totalPoints) * 100).toFixed(5)}
                  caption2={
                    connected
                      ? hasClaimed
                        ? 'This wallet has already claimed eligible ownership points.'
                        : `Connected wallet is eligible to claim 1 Ownership Points`
                      : ''
                  }
                  cardProps={[
                    {
                      heading: connected ? claimedNumber.toString() : 'N/A',
                      body: 'Ownership Points',
                      icon: 'Doge.png',
                      variant: 'opacity' as Variant,
                    },
                    {
                      heading: connected ? ethBalance.toString() : 'N/A',
                      body: 'ETH Balance',
                      icon: 'Eth.png',
                      variant: 'standard' as Variant,
                    },
                  ]}
                  variant={'connect'}
                  copy={copy}
                  refresh={refresh}
                  icon={connected ? '/lock.png' : ''}
                  connected={connected}
                  hasClaimed={hasClaimed}
                  refLink={`https://ownership.verybanking.org/refOwnership/${account}`}
                  confirmingStatus={
                    status
                      ? true
                      : loadingTx
                      ? true
                      : loadingClaim
                      ? true
                      : errorModal
                      ? true
                      : false
                  }
                  modalTitle={
                    loadingTx
                      ? 'Confirming transaction...'
                      : loadingClaim
                      ? 'Success!'
                      : errorModal
                      ? 'Oops!'
                      : ''
                  }
                  modalBody={
                    loadingTx
                      ? 'Please wait'
                      : loadingClaim
                      ? `${claimAmount} sSDEX has been added to your wallet.`
                      : errorModal
                      ? `${claimError}`
                      : ''
                  }
                  modelTopImg={
                    loadingTx
                      ? '../../animation-loading.png'
                      : loadingClaim
                      ? '../../success.png'
                      : errorModal
                      ? '../../failed.png'
                      : ''
                  }
                  modelCloseText={
                    loadingTx
                      ? ''
                      : loadingClaim
                      ? 'Close'
                      : errorModal
                      ? 'Close'
                      : ''
                  }
                  claimValueDisplay={false}
                  disableButton={
                    connected
                      ? hasClaimed
                        ? true
                        : connected
                        ? false
                        : false
                      : false
                  }
                  connect={
                    connected
                      ? claimFunction
                      : correctNetwork
                      ? useConnectWallet
                      : connected
                      ? switchNetworkMetamask
                      : useConnectWallet
                  }
                  buttonText={connected ? 'Claim Ownership' : 'Connect Wallet'}
                  title={'Ownership'}
                  caption={
                    'Fractionalized ownership can be claimed by anyone until further notice. You may use your referral link to earn more ownership points. Connect your wallet to view or claim points.'
                  }
                />
              </>
            }
          />
          <Route
            path="/refownership/*"
            element={
              <>
                {' '}
                <RefOwnership
                  navbarProps={navBarProps}
                  footerProps={footProps}
                  percent={((claimedNumber / totalPoints) * 100).toFixed(5)}
                  caption2={
                    connected ? (
                      hasClaimed ? (
                        'This wallet has already claimed eligible ownership points.'
                      ) : (
                        <p className="text-center">
                          Connected wallet is eligible to claim{' '}
                          <strong>1</strong> Ownership Points.<br></br>You have
                          been referred by: <br></br>
                          {refferer}
                        </p>
                      )
                    ) : (
                      ''
                    )
                  }
                  cardProps={[
                    {
                      heading: connected ? claimedNumber.toString() : 'N/A',
                      body: 'Ownership Points',
                      icon: '../Doge.png',
                      variant: 'opacity' as Variant,
                    },
                    {
                      heading: connected ? ethBalance.toString() : 'N/A',
                      body: 'ETH Balance',
                      icon: '../Eth.png',
                      variant: 'standard' as Variant,
                    },
                  ]}
                  variant={'connect'}
                  copy={copy}
                  refresh={refresh}
                  icon={connected ? '../lock.png' : ''}
                  connected={connected}
                  hasClaimed={hasClaimed}
                  refLink={`https://ownership.verybanking.org/refOwnership/${account}`}
                  confirmingStatus={
                    status
                      ? true
                      : loadingTx
                      ? true
                      : loadingClaim
                      ? true
                      : errorModal
                      ? true
                      : false
                  }
                  modalTitle={
                    loadingTx
                      ? 'Confirming transaction...'
                      : loadingClaim
                      ? 'Success!'
                      : errorModal
                      ? 'Oops!'
                      : ''
                  }
                  modalBody={
                    loadingTx
                      ? 'Please wait'
                      : loadingClaim
                      ? `${claimAmount} sSDEX has been added to your wallet.`
                      : errorModal
                      ? `${claimError}`
                      : ''
                  }
                  modelTopImg={
                    loadingTx
                      ? '../../animation-loading.png'
                      : loadingClaim
                      ? '../../success.png'
                      : errorModal
                      ? '../../failed.png'
                      : ''
                  }
                  modelCloseText={
                    loadingTx
                      ? ''
                      : loadingClaim
                      ? 'Close'
                      : errorModal
                      ? 'Close'
                      : ''
                  }
                  claimValueDisplay={false}
                  disableButton={
                    connected
                      ? hasClaimed
                        ? true
                        : connected
                        ? false
                        : false
                      : false
                  }
                  connect={
                    connected
                      ? refClaim
                      : correctNetwork
                      ? useConnectWallet
                      : connected
                      ? switchNetworkMetamask
                      : useConnectWallet
                  }
                  buttonText={connected ? 'Claim Ownership' : 'Connect Wallet'}
                  title={'Ownership'}
                  caption={
                    'Fractionalized ownership can be claimed by anyone until further notice. You may use your referral link to earn more ownership points. Connect your wallet to view or claim points.'
                  }
                />
              </>
            }
          />
          <Route
            path="/leaderboard"
            element={
              <>
                <Leaderboard
                  navbarProps={navBarProps}
                  footerProps={footProps}
                  cardProps={[]}
                  copy={copy}
                  icon={connected ? '../lock.png' : ''}
                  connect={
                    connected
                      ? refClaim
                      : correctNetwork
                      ? useConnectWallet
                      : connected
                      ? switchNetworkMetamask
                      : useConnectWallet
                  }
                  title={'Ownership'}
                  caption={
                    'Fractionalized ownership can be claimed by anyone until further notice. You may use your referral link to earn more ownership points. Connect your wallet to view or claim points.'
                  }
                  eyebrow={''}
                  account={account ? account : ''}
                />
              </>
            }
          />
        </Routes>
      </div>

      <Modal open={connecting} onClose={() => setConnecting(false)}>
        <div className="flex flex-col items-center justify-center">
          <img
            src={'../../failed.png'}
            className="object-contain w-8 "
            alt="loading transaction"
          />

          <TypoGraphy variant="h5">Oops!</TypoGraphy>
          <div className="my-3">
            <TypoGraphy className="mt-8" centered variant="body2" isbold>
              Please check metamask
            </TypoGraphy>
          </div>

          <Button onClick={() => setConnecting(false)} variant="contained">
            Close
          </Button>
        </div>
      </Modal>
      <Modal open={position} onClose={() => closeModals(false)}>
        <div className="flex flex-col items-center justify-center">
          <img
            src={'../../failed.png'}
            className="object-contain w-8 "
            alt="loading transaction"
          />

          <TypoGraphy variant="h5">Oops!</TypoGraphy>
          <div className="my-3">
            <TypoGraphy className="mt-8" centered variant="body2" isbold>
              {connected ? 'Network is wrong' : 'Please Check Metamask'}
            </TypoGraphy>
          </div>

          <Button onClick={() => switchNetworkMetamask()} variant="contained">
            {connected ? 'Switch Network' : 'Close'}
          </Button>
        </div>
      </Modal>
      <Modal open={position2} onClose={() => closeModals2(false)}>
        <div className="flex flex-col items-center justify-center">
          <img
            src={'../../failed.png'}
            className="object-contain w-8 "
            alt="loading transaction"
          />

          <TypoGraphy variant="h5">Oops!</TypoGraphy>
          <div className="my-3">
            <TypoGraphy className="mt-8" centered variant="body2" isbold>
              Use a desktop to claim sSDEX
            </TypoGraphy>
          </div>

          <Button onClick={() => closeModals2(false)} variant="contained">
            Close
          </Button>
        </div>
      </Modal>
      <Modal open={installed} onClose={() => setInstalled(false)}>
        <div className="flex flex-col items-center justify-center">
          <img
            src={'/failed.png'}
            className="object-contain w-8 "
            alt="loading transaction"
          />

          <TypoGraphy variant="h5">Oops!</TypoGraphy>
          <div className="my-3">
            <TypoGraphy className="mt-8" centered variant="body2" isbold>
              Install MetaMask to continue
            </TypoGraphy>
          </div>

          <Button onClick={() => setInstalled(false)} variant="contained">
            Close
          </Button>
        </div>
      </Modal>
    </div>
  );
}
