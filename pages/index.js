import { useState, useEffect } from "react";

export default function Home() {
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    setCurrentPage(1);
  }, []);
  return (
    <main className="main">
      <div className="hero">
        <div className="row justify-content-center">
          <div className="col-10 text-align-center">
            <img className="hero--img" src="img/coin.png" alt="news" />
          </div>
        </div>
      </div>
      <div className="hero--onboarding">
        <div className="row">
          <div className="col-12 text-align-center">
            <ul className="hero--onboarding__nav">
              <li>
                <a className="active" href="index.html"></a>
              </li>
              <li>
                <a href="index-2.html"></a>
              </li>
              <li>
                <a href="index-3.html"></a>
              </li>
            </ul>
            <h2>Publish news, check news and get rewarded!</h2>
            <p>
              First come, first served! Want to check if a web3 news is real?
            </p>
            <p>Click the button to vote! </p>
            <a href="index-2.html">
              <i className="fa-duotone fa-circle-arrow-right"></i>
            </a>
          </div>
        </div>
      </div>
    </main>
  );
}
