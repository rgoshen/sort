import { NumbersCollection } from './NumbersCollection';
import { CharactersCollection } from './CharactersCollection';
import { LinkedList } from './LinkedList';

const numbersCollection = new NumbersCollection([50, 3, -5, 0]);
numbersCollection.sort();
console.log(numbersCollection.data);

const charactersCollection = new CharactersCollection('rhwiYrNc');
charactersCollection.sort();
console.log(charactersCollection.data);

const linkList = new LinkedList();
linkList.add(500);
linkList.add(-10);
linkList.add(-3);
linkList.add(4);
linkList.sort();
linkList.print();
