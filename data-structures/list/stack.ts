type Node<T> = {
  value: T;
  next?: Node<T>;
}

class Stack<T> {
  public length: number;
  private head?: Node<T>;

  constructor() {
    this.head = undefined;
    this.length = 0;
  }

  push(item: T): void {
    const node: Node<T> = {value: item};
    this.length++;

    if (!this.head) {
      this.head = node;
      return;
    }

    node.next = this.head;
    this.head = node;
  }

  pop(): T | void {
    this.length = Math.max(this.length - 1, 0);
    const head = this.head?.value;
    this.head = this.length === 0 ? undefined : this.head?.next;

    return head;
  }

  peek(): T | void {
    return this.head?.value;
  }
}

export default Stack;