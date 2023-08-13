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

type BaseCard = {
	interactive: boolean;
	count: number;
}

export type CardType = BaseCard & AnimalType;
