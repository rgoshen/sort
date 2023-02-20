import { Sorter } from './Sorter';
import { NumbersCollection } from './NumbersCollection';
import { CharactersCollection } from './CharactersCollection';

const numbersCollection = new NumbersCollection([50, 3, -5, 0]);
const sorterNumbers = new Sorter(numbersCollection);
sorterNumbers.sort();
console.log(numbersCollection.data);

const charactersCollection = new CharactersCollection('rhwiYrNc');
const sorterCharacters = new Sorter(charactersCollection);
sorterCharacters.sort();
console.log(charactersCollection.data);
