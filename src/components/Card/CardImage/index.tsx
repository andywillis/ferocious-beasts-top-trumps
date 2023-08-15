// import { useState } from 'react';

import style from './style.module.css';

interface CardImageProps {
	src: string;
	alt: string;
	// count?: number;
}

/**
 * CardImage
 *
 * @param {CardImageProps} { src, alt, handleImageLoad }
 * @return {React.Element} CardImage component
 */
function CardImage({ src, alt }: CardImageProps) {
	
	// const [ isImageLoaded, setIsImageLoaded ] = useState(false);

	// function handleImageLoad() {
	// 	setIsImageLoaded(true);
	// }
	
	const cn = [
		style.cardImage,
		// !isImageLoaded && style.hidden
	].join(' ');

	return (
		<img
			width="250"
			height="125"
			className={cn}
			// loading={count && count > 10 ? 'lazy' : 'eager'}
			src={src}
			alt={alt}
			// onLoad={handleImageLoad}
		/>
	);

}

export default CardImage;
