
const ethers = require('ethers');
require('dotenv').config();
//const contractMatic = "Matic"
const contractname = "Paiement";



async function main() {

  const url = process.env.ALCHEMY_AMOY_URL;
  //const url = process.env.GANACHE_URL
  /*let artifact_Matic = await hre.artifacts.readArtifact(contractMatic);

  //const provider = new ethers.providers.JsonRpcProvider(url);

  //let privateKey = process.env.PRIVATE_KEY_AMOY;

  const provider = new ethers.providers.JsonRpcProvider(url);

  let privateKey = process.env.PRIVATE_KEY_GANACHE;

  let wallet = new ethers.Wallet(privateKey, provider);
  // Create an instance of a Faucet Factory
  let factory = new ethers.ContractFactory(artifact_Matic.abi, artifact_Matic.bytecode, wallet);
  let faucetmatic = await factory.deploy();

  console.log("Contract DAI deployed to address :", faucetmatic.address);

  const matic = await faucetmatic.deployed();
  const payer = "0x9cBd3d7b4CBbfC38b9CecDfA1032ed4409DbB619";
  
  await matic.faucet(payer,ethers.utils.parseUnits('100'))
  // 1 MATIC Token = 1 * 10^18 WEI*/


  let artifacts = await hre.artifacts.readArtifact(contractname);
  const provider = new ethers.providers.JsonRpcProvider(url);
  let privateKey = process.env.PRIVATE_KEY_AMOY;
  let wallet = new ethers.Wallet(privateKey, provider);

  const receiver = "0x478606969924b4D959dA98009AD28eade0C7a65C"
  let factory_paiement = new ethers.ContractFactory(artifacts.abi, artifacts.bytecode, wallet);
  //let faucet_paiement= await factory_paiement.deploy(faucetmatic.address,receiver);
  let nativetokenmatic = "0x0000000000000000000000000000000000001010";
  let faucet_paiement= await factory_paiement.deploy(nativetokenmatic,receiver);
  
  console.log("Contract Paiement deployed to address :", faucet_paiement.address);
  await faucet_paiement.deployed();
}

main()
  .then(() => process.exit(0))
  .catch(error => {
    console.error(error);
    process.exit(1);
});
