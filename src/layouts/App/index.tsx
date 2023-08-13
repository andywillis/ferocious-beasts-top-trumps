import { Routes, Route } from 'react-router-dom';

import Header from '../../components/Header';

import Home from '../../pages/Home';
import PlayGame from '../../pages/PlayGame';
import ViewCards from '../../pages/ViewCards';
import Instructions from '../../pages/Instructions';

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
				<Route path="/playgame" element={<PlayGame />} />
				<Route path="/instructions" element={<Instructions />} />
				<Route path="/viewcards" element={<ViewCards />} />
			</Routes>
		</>
	);
}

export default App;
