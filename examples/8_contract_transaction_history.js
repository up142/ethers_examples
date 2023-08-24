/*
Brute Force Method
1. Go through each block
2. Grab the transactions list of each block
3. Check to see if you contract is in the "to" or "from" field of the transactions
*/

const { ethers } = require('ethers');

const INFURA_ID = ''
const provider = new ethers.JsonRpcProvider(`https://mainnet.infura.io/v3/${INFURA_ID}`)

const main = async () => {

    const contractAddress = '0xae0Ee0A63A2cE6BaeEFFE56e7714FB4EFE48D419';
    const startBlock = 17965662;
    const endBlock = 17965663;
    
    const relevantTxs = [];

    for (let i = startBlock; i <= endBlock; i++) {
        const block = await provider.getBlock(i, true);
        for (const txHash of block.transactions) {
            const tx = await provider.getTransaction(txHash);
            if (tx.to === contractAddress || tx.from === contractAddress) {
                relevantTxs.push(tx);
            }
        }
    }
    
    console.log(relevantTxs);
}

main()