import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleArrowRight } from '@fortawesome/pro-duotone-svg-icons'
import { useState, useEffect } from "react";

export default function Welcome() {
  const [currentPage, setCurrentPage] = useState(1);

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
            {currentPage === 1 ? 
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
            <a onClick={() => setCurrentPage(2)} >
              <FontAwesomeIcon icon={faCircleArrowRight} />
            </a> 
          </div> : currentPage === 2 ? <div class="col-12 text-align-center">
						<ul class="hero--onboarding__nav">
							<li>
								<a  href="index.html"></a>
							</li>
							<li>
								<a class="active" href="index-2.html"></a>
							</li>
							<li>
								<a href="index-3.html" ></a>
							</li>
						</ul>
						<h2>Do you spot something not being entirely true?</h2>
						<p>If you see some news being voted “True” when you know is not. </p>
						<p>“Challenge” it,</p>
						<p>After two hours the oracle will give the final answer</p>
						<a onClick={() => setCurrentPage(3)}><FontAwesomeIcon icon={faCircleArrowRight} /></a>
					</div>: <div class="col-12 text-align-center">
						<ul class="hero--onboarding__nav">
							<li>
								<a  href="index.html"></a>
							</li>
							<li>
								<a  href="index-2.html"></a>
							</li>
							<li>
								<a class="active" href="index-3.html"></a>
							</li>
						</ul>
						<h2>Win money for contributing Let’s fight against fake news!</h2>
						<p>Oracle is one of our UMA protocols used, we rely on it’s credibility.</p>
						<p> And so do you!</p>
						<a href="/login"><FontAwesomeIcon icon={faCircleArrowRight} /></a>
					</div>}
        </div>
      </div>
    </main>
  );
}
