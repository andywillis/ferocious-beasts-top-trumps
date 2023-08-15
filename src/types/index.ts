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
	visible: boolean;
	properties: PropertyType[];
	interactive?: boolean;
	count?: number
};

export type MessageType = {
	id: string;
	text: string;
}

export type DeckType = {
	computer: CardType[];
	board: CardType[];
	human: CardType[];
}
