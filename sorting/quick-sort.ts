import {SortFn} from './utils';

const qs = (arr: number[], lo: number, hi: number): void => {
  if (lo >= hi) {
    return;
  }

  const pivotIdx = partition(arr, lo, hi);
  qs(arr, lo, pivotIdx - 1);
  qs(arr, pivotIdx + 1, hi);
};

const partition = (arr: number[], lo: number, hi: number): number => {
  const pivot = arr[hi];
  let idx = lo - 1;

  for (let i = lo; i < hi; i++) {
    if (arr[i] <= pivot) {
      idx++;
      const tmp = arr[i];
      arr[i] = arr[idx];
      arr[idx] = tmp;
    }
  }

  idx++;
  arr[hi] = arr[idx];
  arr[idx] = pivot;

  return idx;
};

export const quickSort: SortFn = (array) => {
  const copy = array.slice();

  qs(copy, 0, copy.length - 1);

  return copy;
};
