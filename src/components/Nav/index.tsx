import style from './style.module.css';

/**
 * Nav
 * @return {React.Element} Nav component
 */
function Nav() {
	return (
		<nav className={style.nav}>
			<ul>
				<li>Play Game</li>
				<li>Instructions</li>
				<li>View Cards</li>
			</ul>
		</nav>
	);
}

export default Nav;
