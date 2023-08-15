import { signal, computed } from '@preact/signals-react';

import { CardType, MessageType } from '../types';

import cardsData from '../data/cards.json';
import availableMessagesData from '../data/messages.json';

import { sortCards } from '../helpers/cards';

export const cards = signal(cardsData as CardType[]);

export const sortedCards = computed(() => sortCards(cards.value));

export const availableMessages = signal(availableMessagesData);

export const messages = signal([] as MessageType[]);

export const deckComputer = signal([] as CardType[]);
export const deckBoard = signal([] as CardType[]);
export const deckHuman = signal([] as CardType[]);

export const currentComputerCard = computed(() => {
	return deckComputer.value.at(-1);
});

export const computerCardVisible = signal(false);
export const humanCardInteractive = signal(true);

export const showNextRoundButton = signal(false);

export const winner = signal('');
