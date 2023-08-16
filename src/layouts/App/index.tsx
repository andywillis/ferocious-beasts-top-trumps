import { Routes, Route } from 'react-router-dom';

import { Header } from '../../components';

import { Game, Home, Instructions, ViewCards } from '../../pages';

/**
 * Sets up the header, and routing between the app pages
 *
 * @return {React.Element}
 */
function App() {
	return (
		<>
			<Header title="Ferocious Beasts Top Trumps" />
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/startgame" element={<Game />} />
				<Route path="/instructions" element={<Instructions />} />
				<Route path="/viewcards" element={<ViewCards />} />
			</Routes>
		</>
	);
}

export default App;
