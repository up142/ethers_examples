const { ethers } = require("ethers");

const INFURA_ID = ''
const provider = new ethers.JsonRpcProvider(`https://mainnet.infura.io/v3/${INFURA_ID}`)

const main = async () => {
    const blockNumber = await provider.getBlockNumber()

    console.log(`\nBlock Number: ${blockNumber}\n`)

    const block = await provider.getBlock(blockNumber, true)

    console.log(block)

    if(block.transactions.length > 0) {
        const transaction = await provider.getTransaction(block.transactions[0])
        console.log(`\nLogging first transaction in block:\n`)
        console.log(transaction)
    } else {
        console.log(`\nNo transactions in this block.\n`)
    }
}

main()