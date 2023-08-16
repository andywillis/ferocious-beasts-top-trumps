import style from './style.module.css';

interface CardImageProps {
	src: string;
}

/**
 * CardImage
 *
 * @param {CardImageProps} { src, alt, handleImageLoad }
 * @return {React.Element} CardImage component
 */
function CardImage({ src }: CardImageProps) {

	const cn = [
		style.cardImage,
		style[src.replace('.webp', '')]
	].join(' ');

	return (
		<div
			className={cn}
		/>
	);

}

export default CardImage;
