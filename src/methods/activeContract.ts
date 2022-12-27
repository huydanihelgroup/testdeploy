import { claimContract } from './claimContract';
export default async function activeContracts() {
    
    return await claimContract.methods.isActivated().call()
  }