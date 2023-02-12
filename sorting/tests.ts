import {bubbleSort} from './bubble-sort';
import {quickSort} from './quick-sort';
import {testSort} from './utils';

console.log('bubble sort');
console.log(testSort(bubbleSort));

console.log('quick sort');
console.log(testSort(quickSort));

