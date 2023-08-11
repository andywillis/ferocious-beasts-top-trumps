import { NavLink } from 'react-router-dom';

import style from './style.module.css';

interface NavLinkProps {
	isActive: boolean;
	isPending: boolean;
}

function checkNavItemStatus({ isActive, isPending }: NavLinkProps) {
	if (isPending) return style.pending;
	if (isActive) return style.active;
	return '';
}

/**
 * Nav
 * @return {React.Element} Nav component
 */
function Nav() {
	return (
		<nav className={style.nav}>
			<ul>
				<li>
					<NavLink
						to="/playgame"
						className={(props) => checkNavItemStatus(props)}
					>Play Game
					</NavLink>
				</li>
				<li>
					<NavLink
						to="/instructions"
						className={(props) => checkNavItemStatus(props)}
					>Instructions
					</NavLink>
				</li>
				<li>
					<NavLink
						to="/viewcards"
						className={(props) => checkNavItemStatus(props)}
					>View Cards
					</NavLink>
				</li>
			</ul>
		</nav>
	);
}

export default Nav;
