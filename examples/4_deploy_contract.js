const { ethers } = require("ethers");

const INFURA_ID = ''
const provider = new ethers.JsonRpcProvider(`https://sepolia.infura.io/v3/${INFURA_ID}`)

const privateKey1 = ''
const wallet = new ethers.Wallet(privateKey1, provider)

const bytecode = ""

const ERC20_ABI = [
    "constructor(string name, string symbol)",
    "function name() view returns (string)",
    "function symbol() view returns (string)",
    "function totalSupply() view returns (uint256)",
]

const factory = new ethers.ContractFactory(ERC20_ABI, bytecode, wallet)

const main = async () => {
    const contract = await factory.deploy("DApp U", "DAPP")

    const tx = await contract.deployTransaction.wait();

    console.log(tx)
    console.log(`\nContract deployed: ${contract.address}\n`)

    const name = await contract.name()
    const symbol = await contract.symbol()
    const totalSupply = await contract.totalSupply()

    console.log(`Name: ${name}`)
    console.log(`Symbol: ${symbol}`)
    console.log(`Total Supply: ${totalSupply}\n`)
}

main()