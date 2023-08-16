import style from './style.module.css';

interface FooterProps {
	text: string;
}

/**
 * Footer
 *
 * @param {string} text
 * @return {React.Element}
 */
function Footer({ text }: FooterProps) {
	return (
		<footer className={style.footer}>
			{text}
		</footer>
	);
}

export default Footer;
