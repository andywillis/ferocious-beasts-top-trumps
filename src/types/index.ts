export type PropertyType = {
	id: number;
	name: string;
	value: string | number;
};

export type AnimalType = {
	id: number;
	name: string;
	avatar: string;
	properties: PropertyType[]
};

export type CardType = {
	id: number;
	name: string;
	avatar: string;
	interactive: boolean;
	properties: PropertyType[]
};
