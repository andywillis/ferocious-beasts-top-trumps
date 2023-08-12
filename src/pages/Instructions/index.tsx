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
					<h2>Goal</h2>
				</header>
				<ul>
					<li>To collect all the cards.</li>
				</ul>
			</section>
			<section className={style.step}>
				<header>
					<h2>Setting up the game</h2>
				</header>
				<ul>
					<li>The cards are divided between each player and dealt face down so player can see what another player is holding.</li>
					<li>Any remaining cards from the deal are placed face down in the center of the board.</li>
					<li>Only the top card of each player&apos;s stack should be visible.</li>
				</ul>
			</section>
			<section className={style.step}>
				<header>
					<h2>Playing the game</h2>
				</header>
				<ul>
					<li>The current player chooses a statistic from their current card.</li>
					<li>The other players compare the same statistic from their current card.</li>
					<li>The player with the highest statistic value wins all the cards in play. These are added to the bottom of their stack.</li>
					<li>If there is a tie the cards in play are placed face up on the board and a new round begins. The winner of the next round gets all the cards.</li>
				</ul>
			</section>
		</main>
	);
}

export default Instructions;
