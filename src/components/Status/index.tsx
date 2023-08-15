import style from './style.module.css';

interface StatusProps {
	type: string;
	numberOfCards: number;
	totalCards: number;
}

/**
 * Status
 *
 * Shows the status of the player's deck
 *
 * @param {StatusProps} { status }
 * @return {React.Element}
 */
function Status({ type, numberOfCards, totalCards }: StatusProps) {
	return (
		<section className={style.status}>
			<h3>{type}</h3>
			<p>{`${numberOfCards} / ${totalCards} cards`}</p>
		</section>
	);
}

export default Status;
