import {BinaryNode} from './binary-tree';

const breadthFirstSearch = (head: BinaryNode<number>, needle: number): boolean => {
  const queue = [head];

  while (queue.length) {
    const curr = queue.shift();

    if (!curr) continue;

    if (curr.value === needle) return true;

    curr.left && queue.push(curr.left);
    curr.right && queue.push(curr.right);
  }

  return false;
};

const tree = new BinaryNode(7, new BinaryNode(8, new BinaryNode(23), new BinaryNode(21)), new BinaryNode(69));
console.log(breadthFirstSearch(tree, 8));
console.log(breadthFirstSearch(tree, 1));
console.log(breadthFirstSearch(tree, 69));
