import style from './style.module.css';

interface CardImageProps {
	src: string;
	alt: string;
}

/**
 * CardImage
 *
 * @param {CardImageProps} { src, alt, handleImageLoad }
 * @return {React.Element} CardImage component
 */
function CardImage({ src, alt }: CardImageProps) {
		
	const cn = [
		style.cardImage
	].join(' ');

	return (
		<img
			width="250"
			height="125"
			className={cn}
			src={src}
			alt={alt}
		/>
	);

}

export default CardImage;
