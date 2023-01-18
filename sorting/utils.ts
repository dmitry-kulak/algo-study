import {compose, equals, identity, sortBy, tap} from 'ramda';

const generateArray = (length = 20): number[] => {
  return Array.from({length}, () => Math.floor(Math.random() * 1000));
};

const trueSort = sortBy(identity);

const checkIfSorted = (array: number[]): boolean => {
  console.log('bubble', array);
  const sortedArray = trueSort(array);
  console.log('sorted', sortedArray);
  return equals(array, sortedArray);
};

export type SortFn = (array: number[]) => number[];
const log = tap(console.log);
export const testSort = (sortFn: SortFn) => compose(checkIfSorted, sortFn, log, generateArray);

