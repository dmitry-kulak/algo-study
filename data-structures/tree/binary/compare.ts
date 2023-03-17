import {BinaryNode} from './binary-tree';

const compareTrees = (a: BinaryNode<number> | undefined, b: BinaryNode<number> | undefined): boolean => {
  if (a === undefined && b === undefined) {
    return true;
  }
  if (a === undefined || b === undefined) {
    return false;
  }
  if (a.value !== b.value) {
    return false;
  }

  return compareTrees(a.left, b.left) && compareTrees(a.right, b.right);
};