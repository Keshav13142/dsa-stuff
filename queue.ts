type QNode<T> = {
  value: T;
  next?: QNode<T> | undefined;
};

class Queue<T> {
  public length: number;
  private head?: QNode<T>;
  private tail?: QNode<T>;

  constructor() {
    this.head = this.tail = undefined;
    this.length = 0;
  }

  enqueue(item: T): void {
    const newNode = { value: item } as QNode<T>;
    if (!this.tail) {
      this.head = this.tail = newNode;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    }
    this.length++;
  }

  dequeue(): T | undefined {
    if (!this.head) return undefined;

    this.length--;

    if (this.length === 0) {
      this.tail = undefined;
    }

    let val = this.head.value;
    this.head = this.head.next;

    return val;
  }

  peek(): T | undefined {
    return this.head?.value;
  }
}
