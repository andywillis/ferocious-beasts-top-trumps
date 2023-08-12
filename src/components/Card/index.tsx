import { useState } from 'react';

import { CardType } from '../../types';

import CardImage from './CardImage';
import CardProperties from './CardProperties';

import style from './style.module.css';

/**
 * Card
 *
 * @param {CardType} { name, avatar, properties }
 * @return {React.Element} Card component
 */
function Card(props: CardType) {
	
	const {
		name,
		image,
		properties,
		interactive = false,
		count
	} = props;

	const [ isImageLoaded, setIsImageLoaded ] = useState(false);

	function handleImageLoad() {
		setIsImageLoaded(true);
	}

	const cnContainer = [
		style.container,
		!isImageLoaded ? style.hidden : ''
	].join(' ');

	const cnCard = [
		style.cardSide,
		style.cardFront,
		interactive ? style.interactive : ''
	].join(' ');

	return (
		<section className={cnContainer}>
			<section className={cnCard}>

				<header className={style.name}>
					<h2>{name}</h2>
				</header>

				<CardImage
					src={`assets/images/${image.name}`}
					alt={image.alt}
					count={count}
					handleImageLoad={handleImageLoad}
				/>

				<CardProperties
					properties={properties}
					interactive={interactive}
				/>

			</section>

			<section className={[ style.cardSide, style.cardBack ].join(' ')}>
				Back
			</section>

		</section>
	);

}

export default Card;
