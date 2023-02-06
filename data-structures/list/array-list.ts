class ArrayList<T> {
  public length = 0;
  private capacity: number;
  private array: T[] = [];

  constructor(capacity: number) {
    this.capacity = capacity;
  }

  push(item: T): number {
    if (this.length >= this.capacity) {
      this.capacity *= 2;
      this.array = this.array.slice();
    }

    this.array[this.length] = item;
    this.length++;
    return this.length;
  }

  pop(): T | void {
    if (!this.length) return;

    this.length--;
    const item = this.array[this.length];

    // @ts-expect-error
    this.array[0] = undefined;
    return item;
  }

  enqueue(item: T) {
    for (let i = this.length; i >= 0; i--) {
      if (!i) this.array[i] = item;
      else this.array[i] = this.array[i - 1];
    }
    this.length++;
    return this.length;
  }

  dequeue(): T | void {
    if (!this.length) return;

    this.length--;
    const item = this.array[0];

    for (let i = 0; i <= this.length; i++) {
      this.array[i] = this.array[i + 1];
    }

    return item;
  }
}
