import { useEffect } from 'react';

import { MessageBox, Deck, Board } from '../../components';

import { deckComputer, deckHuman, cards } from '../../store';

import { initialiseGame } from '../../helpers/game';

import style from './style.module.css';

/**
 * Game
 *
 * Sets up the board for playing
 *
 * @return {React.Element} Game component/page
 */
function Game() {
	
	useEffect(() => {
		if (!deckHuman.value.length) initialiseGame();
	}, []);
	
	const totalCards = cards.value.length;

	return (
		<main className={style.main}>
			<Board>
				<Deck
					type="computer"
					totalCards={totalCards}
					deck={deckComputer.value}
				/>
				<MessageBox />
				{/* <Deck
					type="board"
					totalCards={totalCards}
					deck={decks.value.board}
				/> */}
				<Deck
					type="human"
					totalCards={totalCards}
					deck={deckHuman.value}
					interactive
				/>
			</Board>
		</main>
	);
}

export default Game;
