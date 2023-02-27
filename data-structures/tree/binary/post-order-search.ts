import {BinaryNode} from './binary-tree';
import {add} from 'ramda';

const postOrderSearch = (head: BinaryNode<number>): number[] => {
  const walk = (curr: BinaryNode<number> | undefined, path: number[]): number[] => {
    if (!curr) return path;

    walk(curr.left, path);
    walk(curr.right, path);
    path.push(curr.value);

    return path;
  };

  return walk(head, []);
};

const tree = new BinaryNode(7, new BinaryNode(8, new BinaryNode(23), new BinaryNode(23)), new BinaryNode(8));
console.log(postOrderSearch(tree).reduce(add) === 69);