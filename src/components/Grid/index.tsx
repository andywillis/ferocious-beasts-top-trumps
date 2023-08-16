import { ReactNode } from 'react';

import style from './style.module.css';

interface GridProps {
	children: ReactNode;
	onlyoneRow?: boolean;
}

function Grid({ children, onlyoneRow = false }: GridProps) {
	
	const cn = [
		style.grid,
		onlyoneRow && style.onlyOneRow
	].join(' ');
	
	return (
		<section className={cn}>
			{children}
		</section>
	);
}

export default Grid;
