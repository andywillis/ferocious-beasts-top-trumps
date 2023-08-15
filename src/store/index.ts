import { signal } from '@preact/signals-react';

import { CardType, DeckType, MessageType } from '../types';

import animalsData from '../data/animals.json';

export const animals = signal(animalsData as CardType[]);

export const messages = signal([] as MessageType[]);

export const decks = signal({
	computer: [],
	board: [],
	human: []
} as DeckType);
