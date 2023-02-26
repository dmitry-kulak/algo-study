import {SortFn} from './utils';

export const bubbleSort: SortFn = (array) => {
  const copy = array.slice();

  for (let i = 0; i < array.length; ++i) {
    for (let j = 0; j < array.length - i - 1; ++j) {
      if (copy[j] > copy[j + 1]) {
        const tmp = copy[j];
        copy[j] = copy[j + 1];
        copy[j + 1] = tmp;
      }
    }
  }

  return copy;
};
