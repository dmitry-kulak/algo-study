/**
 * Either add item to the end
 * or remove/get first item
 */

type Node<T> = {
  value: T;
  next?: Node<T>;
}

class Queue<T> {
  public length: number;
  private head?: Node<T>;
  private tail?: Node<T>;

  constructor() {
    this.head = this.tail = undefined;
    this.length = 0;
  }

  enqueue(value: T): void {
    this.length++;
    const node = {value};
    if (!this.tail) {
      this.tail = this.head = node;
      return;
    }

    this.tail.next = node;
    this.tail = node;
  }

  deque(): T | undefined {
    if (!this.head) {
      return undefined;
    }

    this.length--;
    const head = this.head;
    this.head = this.head.next;

    return head?.value;
  }

  peek(): T | undefined {
    return this.head?.value;
  }
}

export default Queue;
