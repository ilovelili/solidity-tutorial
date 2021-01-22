require("dotenv").config();
const {ethers} = require("ethers");
const HDWalletProvider = require("@truffle/hdwallet-provider");

const infuraUri = process.env.INFURA_URI || "";
const privKey = process.env.PRIVATE_KEY || "";

module.exports = {
  networks: {
    testnet: {
      networkCheckTimeout: 10000,
      provider: () => new HDWalletProvider(privKey, infuraUri),
      network_id: 4,
      gasPrice: ethers.utils.parseUnits("70", "gwei").toString(),
      gas: 6000000,
    },
    local: {
      host: "127.0.0.1",
      port: 7545,
      network_id: "*",
    },
    mainnetfork: {
      host: "127.0.0.1",
      port: 8545,
      network_id: "1",
    },
  },
  compilers: {
    solc: {
      version: "0.7.0",
      settings: {
        optimizer: {
          enabled: true,
        },
      },
    },
  },
};
