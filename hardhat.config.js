require('@nomiclabs/hardhat-waffle');
require('dotenv').config({ path: '.env' });

// const { ALCHEMY_API_KEY_URL } = process.env;

// const { MUMBAI_PRIVATE_KEY } = process.env;
const {privateKey1} = process.env;

module.exports = {
  solidity: '0.8.4',
  networks: {
    // mumbai: {
    //   url: ALCHEMY_API_KEY_URL,
    //   accounts: [MUMBAI_PRIVATE_KEY],
    // },
    goerli: {
      url: "https://mainnet.block.caduceus.foundation",
      accounts: [privateKey1]
    },
    hardhat: {
    },
  },
};
