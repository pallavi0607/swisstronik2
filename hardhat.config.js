require("@nomicfoundation/hardhat-toolbox");

const PRIVATE_KEY = "ccd2fd9f5ae93b4de0832f745180a3586f13baedf75e85c76df4384e74df911e";

module.exports = {
  defaultNetwork: "swisstronik",
  solidity: "0.8.19",
  networks: {
    swisstronik: {
      url: "https://json-rpc.testnet.swisstronik.com/",
      accounts: [`0x` + `${PRIVATE_KEY}`],
    },
  },
};
