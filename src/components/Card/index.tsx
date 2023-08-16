import { CardType } from '../../types';

import CardImage from './CardImage';
import CardProperties from './CardProperties';

import style from './style.module.css';

/**
 * Card
 *
 * A simple card component with a header, and image, and
 * a set of properties. The card can be toggled between
 * interactive/non-interactive, and visible and invisible.
 * An interactive card has buttons enabled to register clicks
 * from the player.
 *
 * @param {CardType} { name, avatar, properties }
 * @return {React.Element} Card component
 */
function Card(props: CardType) {
	
	const {
		name,
		image,
		visible = true,
		properties,
		interactive = false,
	} = props;

	const containerCn = [
		style.container
	].join(' ');

	const cardCn = [
		style.card,
		!visible && style.invisible,
		interactive && style.interactive
	].join(' ');
	
	return (
		<section className={containerCn}>
			<section className={cardCn}>
				
				<header className={style.name}>
					<h2>{name}</h2>
				</header>

				<CardImage
					src={`images/${image.name}`}
					alt={image.alt}
				/>

				<CardProperties
					animal={name}
					properties={properties}
					interactive={interactive}
				/>

			</section>

		</section>
	);

}

export default Card;
