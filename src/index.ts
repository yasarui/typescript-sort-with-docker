import { NumberSort } from './NumberSort';
import { SortCollection } from './Sort';
import { CharactersSort } from './CharactersSort';

const numberSort = new NumberSort([10,9,8,7,6,1,2,3,4,5]);
const sortCollectin = new SortCollection();
console.log("Before Sorting ",numberSort.data);
sortCollectin.sort(numberSort);
console.log("After Sorting ",numberSort.data);

const charSort = new CharactersSort('Yasar');
const sortCollection = new SortCollection();
console.log("Before Sorting", charSort.data)
sortCollection.sort(charSort);
console.log("After Sorting", charSort.data);

