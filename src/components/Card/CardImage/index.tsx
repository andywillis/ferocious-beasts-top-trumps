import style from './style.module.css';

interface CardImageProps {
	src: string;
	alt: string;
	handleImageLoad: () => void;
}

/**
 * CardImage
 *
 * @param {CardImageProps} { src, alt, handleImageLoad }
 * @return {React.Element} CardImage component
 */
function CardImage({ src, alt, handleImageLoad }: CardImageProps) {
	return (
		<img
			width="250"
			height="125"
			className={style.cardImage}
			src={src}
			alt={alt}
			onLoad={handleImageLoad}
		/>
	);
}

export default CardImage;
