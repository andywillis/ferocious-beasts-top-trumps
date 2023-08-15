import { useEffect } from 'react';

import { MessageBox, Deck, Board } from '../../components';

import { decks } from '../../store';

import initialiseGame from '../../helpers/game';

import style from './style.module.css';

/**
 * PlayGame
 *
 * Sets up the board for playing
 *
 * @return {React.Element} PlayGame component/page
 */
function PlayGame() {
	
	useEffect(() => {
		initialiseGame();
	}, []);
	
	return (
		<main className={style.main}>
			<MessageBox sentences={[{ id: 0, text: 'Message box' }]} />
			<Board>
				<Deck
					type="computer"
					deck={decks.value.computer}
				/>
				<Deck
					type="board"
					deck={decks.value.board}
				/>
				<Deck
					type="computer"
					deck={decks.value.human}
					interactive
				/>
			</Board>
		</main>
	);
}

export default PlayGame;
