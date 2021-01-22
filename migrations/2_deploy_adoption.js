const Adoption = artifacts.require("Adoption.sol");

module.exports = async function (deployer, network) {
  console.log(`deploying adoption to ${network}`);
  await deployer.deploy(Adoption);
};
