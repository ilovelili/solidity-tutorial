require("dotenv").config();
const { ethers } = require("ethers");
const HDWalletProvider = require("@truffle/hdwallet-provider");

const infuraUri = process.env.INFURA_URI || "";
const privKey = process.env.PRIVATE_KEY || "";

module.exports = {
	networks: {
		testnet: {
			networkCheckTimeout: 10000,
			provider: () => new HDWalletProvider(privKey, infuraUri),
			network_id: 42, // kovan
			gasPrice: ethers.utils.parseUnits("70", "gwei").toString(),
			gas: 6000000,
		},
		development: {
			host: "127.0.0.1",
			port: 7545,
			network_id: "*",
		},
	},
};
