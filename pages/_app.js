import '../styles/globals.css'
import { Web3Modal } from "@web3modal/react";

function MyApp({ Component, pageProps }) {
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
  return (
    <div className='bg-lens-100'>
        <Component {...pageProps} />
        <Web3Modal config={config} />
      </div>
  )
}

export default MyApp

