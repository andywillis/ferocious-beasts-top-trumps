import { messages } from '../../store';

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
	return (
		<section className={style.messageBox}>
			{messages.value.map(message => {
				return <p key={message.id}>{message.text}</p>;
			})}
		</section>
	);
}

export default MessageBox;
