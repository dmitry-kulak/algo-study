import linearSearch from './linear-search';
import {binarySearch, binarySearchHas} from './binary-search';
import twoCrystalBalls from './two-crystal-balls-problem';

const sortedArr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

console.log('linear search');
console.log(linearSearch(sortedArr, 3));
console.log(!linearSearch(sortedArr, 11), '\n');

console.log('binary search (has)');
console.log(binarySearchHas(sortedArr, 1));
console.log(binarySearchHas(sortedArr, 5));
console.log(binarySearchHas(sortedArr, 7));
console.log(binarySearchHas(sortedArr, 9));
console.log(binarySearchHas(sortedArr, 10));
console.log(!binarySearchHas(sortedArr, 11));
console.log(!binarySearchHas(sortedArr, -1), '\n');

console.log('binary search');
console.log(binarySearch(sortedArr, 1) === 0);
console.log(binarySearch(sortedArr, 5) === 4);
console.log(binarySearch(sortedArr, 7) === 6);
console.log(binarySearch(sortedArr, 9) === 8);
console.log(binarySearch(sortedArr, 10) === 9);
console.log(binarySearch(sortedArr, 11) === -1);
console.log(binarySearch(sortedArr, -1) === -1, '\n');

console.log('balls');
const breaks = [false, false, false, false, true, true, true, true, true];
console.log(twoCrystalBalls(breaks), '\n');
