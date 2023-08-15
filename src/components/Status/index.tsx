import style from './style.module.css';

interface StatusProps {
	status: string;
}

/**
 * Status
 *
 * Shows the status of the player's deck
 *
 * @param {StatusProps} { status }
 * @return {React.Element}
 */
function Status({ status }: StatusProps) {
	return (
		<section className={style.status}>
			{status}
		</section>
	);
}

export default Status;
