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

	const cn = [
		style.card,
		!isImageLoaded && style.hidden,
		interactive && style.interactive
	].join(' ');
	
	return (
		<section className={cn}>

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
	);

}

export default Card;
