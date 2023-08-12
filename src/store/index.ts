/* eslint-disable import/prefer-default-export */
import { signal, computed } from '@preact/signals-react';

import { AnimalType } from '../types';

import shuffle from '../helpers/shuffle';

import animalsData from '../data/animals.json';

export const animals = signal(animalsData as AnimalType[]);

export const sortedAnimals = computed(() => {
	return animals.value.sort((a, b) => {
		return a.name.localeCompare(b.name);
	});
});

export const randomThreeAnimals = computed(() => {
	return shuffle(animals.value).slice(0, 3);
});
