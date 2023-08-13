import { PropsWithChildren } from 'react';

import style from './style.module.css';

function Grid({ children }: PropsWithChildren) {
	return (
		<section className={style.grid}>
			{children}
		</section>
	);
}

export default Grid;
