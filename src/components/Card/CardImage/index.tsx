import style from './style.module.css';

interface CardImageProps {
	src: string;
	alt: string;
	count: number;
	handleImageLoad: () => void;
}

/**
 * CardImage
 *
 * @param {CardImageProps} { src, alt, handleImageLoad }
 * @return {React.Element} CardImage component
 */
function CardImage({ src, alt, handleImageLoad, count }: CardImageProps) {
	return (
		<img
			width="250"
			height="125"
			className={style.cardImage}
			loading={count > 10 ? 'lazy' : 'eager'}
			src={src}
			alt={alt}
			onLoad={handleImageLoad}
		/>
	);
}

export default CardImage;
