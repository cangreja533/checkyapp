export default function Home() {
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
              <button>
                <img src="img/WalletConnect.png" alt="" />
                Connect with WalletConnect
              </button>
              <button>
                <img src="img/Metamask.png" alt="" />
                Connect with Metamask
              </button>
              <p className="text-align-center mt-5">Already have an account?</p>
              <button className="btn">
                <a href="login.html">Login</a>
              </button>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
