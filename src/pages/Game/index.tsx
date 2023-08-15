import { useEffect } from 'react';

import { MessageBox, Deck, Board } from '../../components';

import { decks, cards } from '../../store';

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
		if (!decks.value.human.length) initialiseGame();
	}, []);
	
	const totalCards = cards.peek().length;

	return (
		<main className={style.main}>
			<Board>
				<Deck
					type="computer"
					totalCards={totalCards}
					deck={decks.value.computer}
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
					deck={decks.value.human}
					interactive
				/>
			</Board>
		</main>
	);
}

export default Game;
