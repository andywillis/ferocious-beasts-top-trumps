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
			{`${type} has ${numberOfCards} / ${totalCards} cards`}
		</section>
	);
}

export default Status;
