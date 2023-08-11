import style from './style.module.css';
import Nav from '../Nav';

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
			<h1>{title}</h1>
			<Nav />
		</header>
	);
}

export default Header;
