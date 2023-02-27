import {BinaryNode} from './binary-tree';
import {add} from 'ramda';

const preOrderSearch = (head: BinaryNode<number>): number[] => {
  const walk = (curr: BinaryNode<number> | undefined, path: number[]): number[] => {
    if (!curr) return path;

    path.push(curr.value);
    walk(curr.left, path);
    walk(curr.right, path);

    return path;
  };

  return walk(head, []);
};

const tree = new BinaryNode(7, new BinaryNode(8, new BinaryNode(23), new BinaryNode(23)), new BinaryNode(8));
console.log(preOrderSearch(tree).reduce(add) === 69);