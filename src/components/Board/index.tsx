import { PropsWithChildren } from 'react';

import style from './style.module.css';

/**
 * Board
 *
 * Container for the game elements
 *
 * @param {PropsWithChildren} { children }
 * @return {React.Element}
 */
function Board({ children }: PropsWithChildren) {
	return (
		<section className={style.board}>
			{children}
		</section>
	);
}

export default Board;
