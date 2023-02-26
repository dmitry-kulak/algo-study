import {bubbleSort} from './bubble-sort';
import {insertionSort} from './insertion-sort';
import {quickSort} from './quick-sort';
import {testSort} from './utils';

console.log('bubble sort');
console.log(testSort(bubbleSort));

console.log('insertion sort');
console.log(testSort(insertionSort));

console.log('quick sort');
console.log(testSort(quickSort));

