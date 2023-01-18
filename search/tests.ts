import linearSearch from './linear-search';
import binarySearch from './binary-search';
import twoCrystalBalls from './two-crystal-balls-problem';

const sortedArr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

console.log('linear search');
console.log(linearSearch(sortedArr, 3));
console.log(!linearSearch(sortedArr, 11), '\n');

console.log('binary search');
console.log(binarySearch(sortedArr, 1));
console.log(binarySearch(sortedArr, 5));
console.log(binarySearch(sortedArr, 7));
console.log(binarySearch(sortedArr, 9));
console.log(binarySearch(sortedArr, 10));
console.log(!binarySearch(sortedArr, 11));
console.log(!binarySearch(sortedArr, -1), '\n');

console.log('balls');
const breaks = [false, false, false, false, true, true, true, true, true];
console.log(twoCrystalBalls(breaks), '\n');
