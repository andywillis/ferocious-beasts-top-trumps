import { SyntheticEvent, KeyboardEvent } from 'react';

import { PropertyType } from '../../../types';

import { calculateWin } from '../../../helpers/game';

import style from './style.module.css';

interface CardPropertiesProps {
	animal: string;
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
function CardProperties({ animal, properties, interactive }: CardPropertiesProps) {
	
	function handleKey(e: KeyboardEvent) {
		if (e.key === 'Enter') {
			const { dataset: { name, value } } = e.target as HTMLButtonElement;
			if (name && value) calculateWin(animal, name, Number(value), 'human');
		}
	}

	function handleClick(e: SyntheticEvent) {
		const { dataset: { name, value } } = e.currentTarget as HTMLButtonElement;
		if (name && value) calculateWin(animal, name, Number(value), 'human');
	}
	
	return (
		<ul className={style.properties}>
			{properties.sort(sortPropertiesbyName).map((property: PropertyType) => {

				const cn = [
					style.property,
					interactive && style.interactive
				].join(' ');

				return (
					<li key={property.id} className={cn}>
						<button
							type="button"
							data-name={property.name}
							data-value={property.value}
							onClick={handleClick}
							onKeyDown={handleKey}
							disabled={!interactive}
						>
							<span>{property.name}</span>
							<span>{property.value}</span>
						</button>
					</li>
				);
			})}
		</ul>
	);

}

export default CardProperties;
