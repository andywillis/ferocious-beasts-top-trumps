export type PropertyType = {
	id: number;
	name: string;
	value: string | number;
};

export type AnimalType = {
	id: number;
	name: string;
	image: {
		name: string;
		alt: string
	};
	properties: PropertyType[]
};

export type CardType = {
	id: number;
	name: string;
	image: {
		name: string;
		alt: string
	};
	properties: PropertyType[];
	interactive: boolean;
	count: number;
};
