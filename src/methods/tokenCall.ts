import { claimContract } from './claimContract2';
export default async function tokenCall() {

    const accounts = await (window as any).ethereum.request({
      method: 'eth_requestAccounts',
    });
    const account = accounts[0];

    const tokenBalance = await claimContract.methods.userPoints(account).call();
    console.log("User Points:",tokenBalance)
    return tokenBalance;
  }