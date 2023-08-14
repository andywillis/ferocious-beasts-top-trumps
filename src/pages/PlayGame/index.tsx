import { MessageBox, PlayerDeck, Board } from '../../components';

import { decks } from '../../store';

import style from './style.module.css';

/**
 * PlayGame
 *
 * Sets up the board for playing
 *
 * @return {React.Element} PlayGame component/page
 */
function PlayGame() {
	return (
		<main className={style.main}>
			<MessageBox sentences={[]} />
			<Board>
				<PlayerDeck
					type="computer"
					deck={decks.value.computer}
				/>
				<PlayerDeck
					type="computer"
					deck={decks.value.computer}
				/>
			</Board>
		</main>
	);
}

export default PlayGame;
