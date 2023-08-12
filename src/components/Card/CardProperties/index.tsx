import { PropertyType } from '../../../types';

import style from './style.module.css';

interface CardPropertiesProps {
	properties: PropertyType[];
	interactive: boolean;
}

function sortPropertybyName(a: PropertyType, b: PropertyType) {
	return a.name.localeCompare(b.name);
}

/**
 * CardProperties
 *
 * @param {CardPropertiesProps} { properties, interactive }
 * @return {React.Element} CardProperties component
 */
function CardProperties({ properties, interactive }: CardPropertiesProps) {
	return (
		<ul className={style.properties}>
			{properties.sort(sortPropertybyName).map((property: PropertyType) => {
				
				const cn = [
					style.property,
					interactive && style.interactive
				].join(' ');
				
				return (
					<li key={property.id} className={cn}>
						<span>{property.name}</span>
						<span>{property.value}</span>
					</li>
				);

			})}
		</ul>
	);
}

export default CardProperties;
