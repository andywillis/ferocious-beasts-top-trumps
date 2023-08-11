import style from './style.module.css';
import Nav from '../Nav';

/**
 * Header
 * @return {React.Element} Header component
 */
function Header() {
	return (
		<header className={style.header}>
			<h1>Ferocious Animals Top Trumps</h1>
			<Nav />
		</header>
	);
}

export default Header;
