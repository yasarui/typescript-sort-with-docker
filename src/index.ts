import { NumberSort } from './NumberSort';
import { SortCollection } from './Sort';
import { CharactersSort } from './CharactersSort';

/**
const numberSort = new NumberSort([10,9,8,7,6,1,2,3,4,5]);
const sortCollectin = new SortCollection();
console.log("Before Sorting ",numberSort.data);
sortCollectin.sort(numberSort);
console.log("After Sorting ",numberSort.data);

1. The problem with Interface approach is
-----------------------------------------
First we need to Create a Instance of NumberSort
Then We need to Create a Instance of SortCollection
Afer that only we need to pass the numberSort into the Sortcollection to sort
**/

const numberSort = new NumberSort([10,9,8,7,6,5,4,3,2,1]);
console.log("Before sorting ",numberSort.data);
numberSort.sort();
console.log("After Sorting", numberSort.data);

const charSort = new CharactersSort('Yasar');
console.log("Before sorting", charSort.data);
charSort.sort();
console.log("After Sorting",charSort.data);