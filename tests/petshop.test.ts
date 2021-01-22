import {ethers} from "ethers";
import Ganache from "ganache-core";
import {deployContracts, provider, startGanache, wallet} from "./ganache";

require("dotenv").config();

jest.setTimeout(100000);

describe("test petshop", () => {
  let account: string;
  let ganacheServer: Ganache.Server;
  let adoptionAddress: string;

  beforeAll(async (done) => {
    ganacheServer = await startGanache();
    adoptionAddress = await deployContracts();
    account = wallet().address;
    console.log(`account address is ${account}`);
    done();
  });

  afterAll((done) => {
    ganacheServer.close();
    console.log("test completed");
    done();
  });

  test("account should be initialized", async (done) => {
    expect(account).not.toBeUndefined;
    expect(account).not.toBeNull;
    const balance = ethers.utils.formatEther(await provider().getBalance(account)); // from wei to eth
    console.log(`balance is ${balance} ETH`);
    expect(balance).not.toBeNull;
    done();
  });
});
