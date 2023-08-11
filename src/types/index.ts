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
