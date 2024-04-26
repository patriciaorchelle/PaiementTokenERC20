//require("@nomicfoundation/hardhat-toolbox");

/** @type import('hardhat/config').HardhatUserConfig */

require("@nomiclabs/hardhat-waffle");
require("dotenv").config();

module.exports = {
  solidity: "0.8.18",
  networks: {
    amoy: {
      url: process.env.ALCHEMY_AMOY_URL,
      accounts: [process.env.PRIVATE_KEY_AMOY]
    },
    ganache: {
      url:process.env.GANACHE_URL,
      accounts:[process.env.PRIVATE_KEY_GANACHE]
    }
  }
};
