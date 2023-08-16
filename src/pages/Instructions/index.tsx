/* eslint-disable max-len */
import style from './style.module.css';

/**
 * Instructions
 *
 * @return {React.Element} Instructions component/page
 */
function Instructions() {
	return (
		<main className={style.main}>
			<section className={style.step}>
				<header>
					<h2>The Goal</h2>
				</header>
				<ul>
					<li>To collect all the cards.</li>
				</ul>
			</section>
			<section className={style.step}>
				<header>
					<h2>The Game</h2>
				</header>
				<ul>
					<li>Each card has a set of statistics. Your aim in each round is to choose a statistic higher than the corresponding one on the other player&apos;s card.</li>
					<li>If it&apos;s higher than the opponent&apos;s card the player wins the round and the player&apos;s card.</li>
					<li>If it&apos;s lower the other player wins the round and the player&apos;s card.</li>
					<li>If it&apos;s a tie the cards are placed on the board and a new round begins. The winner of the next round gets all the cards.</li>
				</ul>
			</section>
		</main>
	);
}

export default Instructions;
