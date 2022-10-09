import { WalletConnectConnector } from '@web3-react/walletconnect-connector';

const config = {
    projectId: "9338b83ff89083cd0ee7da8cea475c23",
    theme: "dark",
    accentColor: "default",
    ethereum: {
      appName: "web3Modal",
      chains: [
        {
          id: 80001,
          name: "Polygon Testnet Mumbai",
          network: "mumbai",
          rpcUrls: {
            default : "https://rpc-mumbai.maticvigil.com"
          },
        },
      ],
    },
  };

export const WalletConnect = new WalletConnectConnector(config);