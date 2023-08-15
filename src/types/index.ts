export type PropertyType = {
	id: number;
	name: string;
	value: string | number;
};

export type CardType = {
	id: number;
	name: string;
	image: {
		name: string;
		alt: string
	};
	properties: PropertyType[];
	visible?: boolean;
	interactive?: boolean;
	count?: number
};

export type MessageType = {
	id: string;
	text: string;
}
