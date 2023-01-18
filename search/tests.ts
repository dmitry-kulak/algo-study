import linearSearch from './linear-search';
import binarySearch from './binary-search';

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

