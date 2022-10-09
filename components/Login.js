import { ConnectButton, useAccount } from '@web3modal/react'
import { useWeb3React } from '@web3-react/core';
import { useState, useEffect } from 'react'
import { WalletConnect } from './Wallet';
import { useRouter } from 'next/router'
import Home from './Home';

export default function Login() {
  const { isConnected } = useAccount()
  const router = useRouter()

  const [currentAccount, setCurrentAccount] = useState("")
  const { activate } = useWeb3React()

  useEffect(() => {
    checkIfWalletIsConnected()
  }, [])

  const checkIfWalletIsConnected = async () => {
    try {
      const { ethereum } = window;

      if (!ethereum) {
        console.log("Make sure you have metamask!");
        return;
      } else {
        console.log("We have the ethereum object", ethereum);
      }

      const accounts = await ethereum.request({ method: "eth_accounts" });

      if (accounts.length !== 0) {
        const account = accounts[0];
        console.log("Found an authorized account:", account);
        setCurrentAccount(account);
      } else {
        console.log("No authorized account found")
      }
    } catch (error) {
      console.log(error);
    }
  }

  const connectWallet = async () => {
    try {
      const { ethereum } = window;

      if (!ethereum) {
        alert("Get MetaMask!");
        return;
      }

      const accounts = await ethereum.request({ method: "eth_requestAccounts" });

      console.log("Connected", accounts[0]);
      setCurrentAccount(accounts[0]);
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <main className="main">
      <div className="hero">
        <div className="row justify-content-center">
          <div className="col-10 text-align-center">
            <img className="hero--img" src="img/hero.png" alt="news" />
            <h2 className="hero--title">CHECKY</h2>
            <p className="hero--text">Verified news on Web 3 World </p>
          </div>
        </div>

        <div className="hero--login">
          <div className="row">
            <div className="col-12">
              <h2>Verify news with us & earn </h2>
             
              { isConnected  || currentAccount ? <Home/> : 
              <div>
                {/* <ConnectButton /> */}
                <button onClick={() => { activate(WalletConnect)}}>
                  <img src="img/WalletConnect.png" alt="" />
                  Connect with WalletConnect
                </button>
                <button onClick={connectWallet}>
                  <img src="img/Metamask.png" alt="" />
                  Connect with Metamask
                </button>
                <button>
                  <img src="img/lens.png" alt=""/>
                  <a href="home-vote.html">Connect with Lens</a>
                </button>
                <p className="text-align-center mt-5">Already have an account?</p>
              <button className="btn">
                <a href="login.html">Login</a>
              </button>
              </div>}     
              
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
