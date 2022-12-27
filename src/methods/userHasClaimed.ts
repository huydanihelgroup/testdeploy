import { claimContract } from './claimContract';

export default async function renderClaims() {
    const accounts = await (window as any).ethereum.request({
      method: 'eth_requestAccounts',
    });
    const account = accounts[0];
    return await claimContract.methods.claimedTokens(account).call();
      
  }