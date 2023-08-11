import React from 'react';
import ReactDOM from 'react-dom/client';

import Game from './layouts/Game';

import './styles/global.css';

ReactDOM.createRoot(document.getElementById('root')!).render(
	<React.StrictMode>
		<Game />
	</React.StrictMode>,
);
