import { PropertyType } from '../../../types';

import style from './style.module.css';

interface CardPropertiesProps {
	properties: PropertyType[];
	interactive: boolean;
}

function sortPropertiesbyName(a: PropertyType, b: PropertyType) {
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
			{properties.sort(sortPropertiesbyName).map((property: PropertyType) => {
				
				const cn = [
					style.property,
					interactive && style.interactive
				].join(' ');

				if (interactive) {
					return (
						<li key={property.id} className={cn}>
							<button type="button">
								<span>{property.name}</span>
								<span>{property.value}</span>
							</button>
						</li>
					);
				}
				
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
