import { signal, computed } from '@preact/signals-react';

import { CardType, MessageType } from '../types';

// Data
import cardsData from '../data/cards.json';
import availableMessagesData from '../data/messages.json';

export const cards = signal(cardsData as CardType[]);
export const availableMessages = signal(availableMessagesData);

export const deckComputer = signal([] as CardType[]);
export const deckBoard = signal([] as CardType[]);
export const deckHuman = signal([] as CardType[]);
export const messages = signal([] as MessageType[]);
export const computerCardVisible = signal(false);
export const humanCardVisible = signal(true);
export const humanCardInteractive = signal(true);
export const showNextRoundButton = signal(false);
export const winner = signal('');

export const currentComputerCard = computed(() => {
	return deckComputer.value.at(-1);
});

export const currentHumanCard = computed(() => {
	return deckHuman.value.at(-1);
});
