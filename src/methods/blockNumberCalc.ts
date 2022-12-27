import Web3 from 'web3';
const web3 = new Web3(window.ethereum);
export default async function blockNumberCalc(){
    const blockNumber = await web3.eth.getBlockNumber()
    return blockNumber;
} 
