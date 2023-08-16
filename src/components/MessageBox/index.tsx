import { messages, showNextRoundButton } from '../../store';

import { playNextRound } from '../../helpers/game';

import style from './style.module.css';

/**
 * MessageBox
 *
 * Describes the board situation for the player
 *
 * @param {MessageBoxProps} { sentences }
 * @return {React.Element}
 */
function MessageBox() {

	function handleClick() {
		playNextRound();
	}

	return (
		<section className={style.messageBox}>
			{messages.value.map(message => {

				const cn = [
					style.message,
					message.type === 'underline' && style.underline
				].join(' ');

				return <p className={cn} key={message.id}>{message.text}</p>;
			})}
			{showNextRoundButton.value && (
				<button
					onClick={handleClick}
					className={style.nextRound}
					type="button"
				>Play next round
				</button>
			)}
		</section>
	);
}

export default MessageBox;
