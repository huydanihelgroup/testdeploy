import Web3 from 'web3';
const web3 = new Web3(window.ethereum);
export default async function renderClaims() {
    const correctChainId = 1;
    await (window as any).ethereum.request({
      method: 'wallet_switchEthereumChain',
      params: [
        {
          chainId: web3.utils.toHex(correctChainId)
        //   chainName: 'Avalanche Mainnet C-Chain',
        //   nativeCurrency: {
        //     name: 'AVAX',
        //     decimals: 18,
        //   },
        //   rpcUrls: ['https://api.avax.network/ext/bc/C/rpc'],
        //   blockExplorerUrls: ['https://snowtrace.io/'],
         },
      ],
    });
    return await (window as any).ethereum.networkVersion
  }