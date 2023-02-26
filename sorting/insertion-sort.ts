import {SortFn} from './utils';

export const insertionSort: SortFn = (arr) => {
  const copy = arr.slice();

  for (let i = 1; i < copy.length; i++) {
    if (copy[i] >= copy[i - 1]) continue;

    for (let j = i - 1; j >= 0; j--) {
      if (copy[j] > copy[j + 1]) {
        const tmp = copy[j + 1];
        copy[j + 1] = copy[j];
        copy[j] = tmp;
      }
    }
  }

  return copy;
};
