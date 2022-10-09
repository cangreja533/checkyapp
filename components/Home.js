export default function Home() {
    return(
        <main class="main">
		<div class="main--title">
			<a href="push-some-news.html"><h1 class="title">Checky newsfeed</h1></a>
			<a href="push-time-up.html">			<p>Check our latest news on web3 👀 🔍</p>
			</a>
		</div>
		<section class="highlights">
			<h2 class="highlights--title">Highlights</h2>
			<div class="row">
				<article class="article col-4">
					<img class="article--img" src="img/item1.png" alt="" />
					<h3 class="article--title">ETHEREUM</h3>
				</article>
				<article class="article col-4">
					<img class="article--img" src="img/item2.png" alt="" />
					<h3 class="article--title">DEFI</h3>
				</article>
				<article class="article col-4">
					<img class="article--img" src="img/item3.png" alt="" />
					<h3 class="article--title">CRYPTO</h3>
				</article>
			</div>
			<a class="highlights--link" href="">See more</a>
		</section>
		<section class="feed-article">
			<article class="article article__feed ">
				<img class="article--img" src="img/featurearticle.png" alt="" />
				<h3 class="article--title">ETHEREUM</h3>
				<span class="article--subtitle">Discounted ‘stETH’ May Affect ‘Merge’</span>
				<p class="article--excerpt">Enigma treats ‘stETH’ as an Ethereum bond that can offer a 4% annual return to
					investors.
					If the Merge is successful ‘stETH’ holders may receive 1.04 ETH a year.</p>
				<div class="article--vote row">
					<div class="col-6">
						<span class="article--last-vote">1 hr ago - @Emmilili</span>
						<span class="article--comments">Comments</span>
					</div>
					<div class="col-6  text-align-center"> <button class="btn btn--disable"><a href="complete-vote.html">VOTE TRUE</a></button>
						<a class="article--challenge" href="challenge.html">CHALLENGE</a>
					</div>
				</div>
			</article>
			<article class="article article__feed ">
				<img class="article--img" src="img/featurearticle.png" alt="" />
				<h3 class="article--title">ETHEREUM</h3>
				<span class="article--subtitle">Discounted ‘stETH’ May Affect ‘Merge’</span>
				<p class="article--excerpt">Enigma treats ‘stETH’ as an Ethereum bond that can offer a 4% annual return to
					investors.
					If the Merge is successful ‘stETH’ holders may receive 1.04 ETH a year.</p>
				<div class="article--vote row">
					<div class="col-6">
						<span class="article--last-vote">1 hr ago - @Emmilili</span>
						<span class="article--comments">Comments</span>
					</div>
					<div class="col-6"> <button class="btn"><a href="complete-vote.html">VOTE HERE</a></button>
					</div>
				</div>
			</article>
			<article class="article article__feed ">
				<img class="article--img" src="img/featurearticle.png" alt="" />
				<h3 class="article--title">ETHEREUM</h3>
				<span class="article--subtitle">Discounted ‘stETH’ May Affect ‘Merge’</span>
				<p class="article--excerpt">Enigma treats ‘stETH’ as an Ethereum bond that can offer a 4% annual return to
					investors.
					If the Merge is successful ‘stETH’ holders may receive 1.04 ETH a year.</p>
				<div class="article--vote row">
					<div class="col-6">
						<span class="article--last-vote">1 hr ago - @Emmilili</span>
						<span class="article--comments">Comments</span>
					</div>
					<div class="col-6"> <button class="btn"><a href="complete-vote.html">VOTE HERE</a></button>
					</div>
				</div>
			</article>
		</section>
	</main>
)
}