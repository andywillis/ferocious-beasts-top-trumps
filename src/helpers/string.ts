/* eslint-disable import/prefer-default-export */

/**
 * toCapitalCase
 *
 * @export
 * @param {string} str
 * @return {string}
 */
export function toCapitalCase(str: string) {
	return str.split(' ').map(word => {
		return `${word[0].toUpperCase()}${word.slice(1)}`;
	}).join(' ');
}
