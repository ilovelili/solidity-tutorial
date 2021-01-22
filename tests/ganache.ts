require("dotenv").config();
import {ethers} from "ethers";
import truffle from "../truffle-config";
import Ganache from "ganache-core";
import {AdoptionFactory} from "../types/ethers-contracts";

export const network = truffle.networks.mainnetfork;
export const ganacheUri = `http://${network.host}:${network.port}`; // http://localhost:8545
export const networkId = network.network_id;

console.log(`Ganache URI: ${ganacheUri}. Network ID: ${networkId}`);

const privKey = process.env.PRIVATE_KEY || "";
const infuraUri = process.env.INFURA_URI || "";

export const provider = () => new ethers.providers.JsonRpcProvider(ganacheUri);
export const wallet = () => new ethers.Wallet(privKey, provider());

// start ganache
export async function startGanache() {
  const server = Ganache.server({
    fork: infuraUri,
    network_id: networkId,
    accounts: [
      {
        secretKey: privKey,
        balance: 1e20,
      },
    ],
    gasLimit: 6000000,
  });

  server.listen(network.port);
  return server;
}

export async function deployContracts(): Promise<string> {
  console.log(`deploying contracts`);
  const adoptionFactory = new AdoptionFactory(wallet());
  const adoptionContract = await adoptionFactory.deploy();
  await adoptionContract.deployed();
  return adoptionContract.address;
}
