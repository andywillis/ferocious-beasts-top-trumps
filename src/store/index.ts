import { signal, computed } from '@preact/signals-react';

import { CardType, DeckType, MessageType } from '../types';

import cardsData from '../data/cards.json';
import availableMessagesData from '../data/messages.json';

import { sortCards } from '../helpers/cards';

export const cards = signal(cardsData as CardType[]);

export const sortedCards = computed(() => sortCards(cards.value));

export const availableMessages = signal(availableMessagesData);

export const messages = signal([] as MessageType[]);

export const decks = signal({
	computer: [],
	board: [],
	human: []
} as DeckType);

export const currentComputerCard = computed(() => {
	if (decks.peek().computer.length) {
		return decks.peek().computer.at(-1);
	}
	return undefined;
});

export const computerCardVisible = signal(false);
