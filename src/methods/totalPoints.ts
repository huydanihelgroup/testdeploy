import { claimContract } from './claimContract2';
export default async function totalPoints() {
  const total = await claimContract.methods.pointsClaimed().call();
  return total;
}