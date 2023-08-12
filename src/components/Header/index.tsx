import { Link } from 'react-router-dom';

import Nav from '../Nav';

import style from './style.module.css';

interface HeaderProps {
	title: string;
}

/**
 * Header
 * @return {React.Element} Header component
 */
function Header({ title }: HeaderProps) {
	return (
		<header className={style.header}>
			<h1><Link to="/">{title}</Link></h1>
			<Nav />
		</header>
	);
}

export default Header;
