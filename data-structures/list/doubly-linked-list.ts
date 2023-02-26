class Node<T> {
  constructor(
    public val: T,
    public next?: Node<T>,
    public prev?: Node<T>,
  ) {
  }
}

class DoublyLinkedList<T> {
  constructor(val?: T | T[]) {
    if (!val) return;
    if (!Array.isArray(val)) {
      this.append(val);
    } else {
      val.forEach(item => this.append(item));
    }
  }

  public length = 0;

  private _head?: Node<T>;
  private _tail?: Node<T>;

  get head(): T | undefined {
    return this._head?.val;
  }

  get tail(): T | undefined {
    return this._tail?.val;
  }

  append(item: T): void {
    this.length++;
    const newNode = new Node(item);
    if (!this._head) {
      this._head = this._tail = newNode;
      return;
    }
    if (this._tail) {
      this._tail.next = newNode;
      this._tail = newNode;
    } else {
      this._head.next = newNode;
      this._tail = newNode;
    }
  }

  protected getNode(index: number): Node<T> | void {
    if (index < 0 || index > this.length - 1) {
      return;
    }
    let current = this._head;
    for (let i = 0; i < index; i++) {
      current = current?.next;
    }

    return current;
  }


  get(index: number): T | void {
    return this.getNode(index)?.val;
  }

  insertAt(item: T, index: number): void {
    if (index > this.length) {
      throw new Error('Out of bounds index (bigger than length)');
    }
    if (index === this.length) {
      return this.append(item);
    }
    if (index === 0) {
      return this.prepend(item);
    }

    if (index < 0) {
      throw new Error('Out of bounds index (less than length)');
    }

    const newNode = new Node(item);
    const currNode = this.getNode(index)!;

    newNode.next = currNode;
    newNode.prev = currNode?.prev;
    if (currNode.prev) {
      currNode.prev.next = newNode;
      currNode.prev = newNode;
    }
    this.length++;
    return;

  }


  prepend(item: T): void {
    this.length++;
    const node = new Node(item);
    if (!this._head) {
      this._head = this._tail = node;
      return;
    }

    node.next = this._head;
    this._head.prev = node;
    this._head = node;
  }

  protected removeNode(node: Node<T>) {
    this.length--;

    if (this.length === 0) {
      this._head = this._tail = undefined;
      return;
    }

    if (node.prev) {
      node.prev.next = node.next;
    }

    if (node.next) {
      node.next.prev = node.prev;
    }

    if (node === this._head) {
      this._head = node.next;
    }
    if (node === this._tail) {
      this._tail = node.prev;
    }

    node.prev = node.next = undefined;

    return node.val;
  }

  remove(item: T): T | undefined {
    let curr = this._head;
    for (let i = 0; curr && i < this.length; i++) {
      if (curr.val === item) {
        return this.removeNode(curr);
      }

      curr = curr.next;
    }
  }


  removeAt(index: number): T | undefined {
    const node = this.getNode(index);
    if (!node) return;

    return this.removeNode(node);
  }
}

