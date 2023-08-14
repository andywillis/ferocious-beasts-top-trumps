import style from './style.module.css';

interface NoticeProps {
	notice: string;
}

/**
 * Notice
 *
 * Shows details of the player's deck
 *
 * @param {NoticeProps} { notice }
 * @return {React.Element}
 */
function Notice({ notice }: NoticeProps) {
	return (
		<section className={style.notice}>
			{notice}
		</section>
	);
}

export default Notice;
