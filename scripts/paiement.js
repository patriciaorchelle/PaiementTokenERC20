
const ethers = require('ethers');
const contractname = "Paiement";
//const maticTokenAddress = "0xddDCD1D7c8A64b9CA1d094eBE596e0B598551f31";
const contractaddress = "0x1082ccdc5E72Eb8D2336c07Ded79A2CAd4BB3529";
const gasLimit = 3000000; // Limite de gaz souhaitée

async function main() {

  const url = process.env.ALCHEMY_AMOY_URL;
 // const url = process.env.GANACHE_URL

  let artifacts = await hre.artifacts.readArtifact(contractname);
 
  const provider = new ethers.providers.JsonRpcProvider(url);

  //let privateKey = process.env.PRIVATE_KEY_GANACHE;
  let privateKey = process.env.PRIVATE_KEY_AMOY;

  let wallet = new ethers.Wallet(privateKey, provider);

  let contract = new ethers.Contract(contractaddress,artifacts.abi,wallet);
  // Appeler la fonction contribute avec le montant souhaité
  const contributionAmount = ethers.utils.parseUnits('1000000000'); //  montant de la contribution souhaité
  //let contributionAmount = 1;
  try {
    // Appeler la fonction contribute du contrat Paiement
    const tx = await contract.contribute(contributionAmount,{ gasLimit });
    await tx.wait();
    //console.log(tx);
    console.log('Contribution effectuée avec succès !');
  } catch (error) {
    console.error('Erreur lors de la contribution :', error);
  }

}

main()
  .then(() => process.exit(0))
  .catch(error => {
    console.error(error);
    process.exit(1);
});
