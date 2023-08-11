import style from './style.module.css';

/**
 * Header
 * @return {React.Element} Header component
 */
function Header() {
	return (
		<header className={style.header}>
			<h1>Ferocious Animals Top Trumps</h1>
		</header>
	);
}

export default Header;
