import {compose, equals, identity, sortBy, tap} from 'ramda';

export type SortFn = (array: number[]) => number[];

const generateArray = (length = 20): number[] => {
  return Array.from({length}, () => Math.floor(Math.random() * 1000));
};

const trueSort = sortBy(identity);

const checkIfSorted = (array: number[]): boolean => equals(array, trueSort(array));

const logger = (step = 1) => tap<number[]>(array => console.log(`step ${step++}`, array));
export const testSort = (sortFn: SortFn) => {
  const log = logger();
  return compose(checkIfSorted, log, sortFn, log, generateArray)();
};

