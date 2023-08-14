import { SentenceType } from '../../types';

import style from './style.module.css';

interface MessageBoxProps {
	sentences: SentenceType[]
}

/**
 * MessageBox
 *
 * Describes the board situation for the player
 *
 * @param {MessageBoxProps} { sentences }
 * @return {React.Element}
 */
function MessageBox({ sentences }: MessageBoxProps) {
	return (
		<section className={style.messageBox}>
			{sentences.map(sentence => {
				return <p key={sentence.id}>{sentence.text}</p>;
			})}
		</section>
	);
}

export default MessageBox;
