import { PropertyType } from '../../../types';

import style from './style.module.css';

interface CardPropertiesProps {
	properties: PropertyType[];
	interactive: boolean;
}

/**
 * In case the properties in the data are not correctly added
 * this function sorts them before rendering
 *
 * @param {PropertyType} a
 * @param {PropertyType} b
 * @return {array}
 */
function sortPropertiesbyName(a: PropertyType, b: PropertyType) {
	return a.name.localeCompare(b.name);
}

/**
 * CardProperties
 *
 * A list of card properties (or statistics). If "interactive" the
 * component returns a list of buttons, otherwise a simple list
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
