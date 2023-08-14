/* eslint-disable import/prefer-default-export */
import { signal } from '@preact/signals-react';

import { AnimalType } from '../types';

import animalsData from '../data/animals.json';

export const animals = signal(animalsData as AnimalType[]);

export const decks = signal({
	computer: [],
	human: []
});
