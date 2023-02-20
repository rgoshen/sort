"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Sorter_1 = require("./Sorter");
const NumbersCollection_1 = require("./NumbersCollection");
const CharactersCollection_1 = require("./CharactersCollection");
const numbersCollection = new NumbersCollection_1.NumbersCollection([50, 3, -5, 0]);
const sorterNumbers = new Sorter_1.Sorter(numbersCollection);
sorterNumbers.sort();
console.log(numbersCollection.data);
const charactersCollection = new CharactersCollection_1.CharactersCollection('rhwiYrNc');
const sorterCharacters = new Sorter_1.Sorter(charactersCollection);
sorterCharacters.sort();
console.log(charactersCollection.data);
