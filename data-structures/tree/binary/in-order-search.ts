import {BinaryNode} from './binary-tree';
import {add} from 'ramda';

const inOrderSearch = (head: BinaryNode<number>): number[] => {
  const walk = (curr: BinaryNode<number> | undefined, path: number[]): number[] => {
    if (!curr) return path;

    walk(curr.left, path);
    path.push(curr.value);
    walk(curr.right, path);

    return path;
  };

  return walk(head, []);
};

const tree = new BinaryNode(7, new BinaryNode(8, new BinaryNode(23), new BinaryNode(23)), new BinaryNode(8));
console.log(inOrderSearch(tree).reduce(add) === 69);