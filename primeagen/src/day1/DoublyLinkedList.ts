type Node<T> = {
    value: T;
    prev?: Node<T>;
    next?: Node<T>;
};

export default class DoublyLinkedList<T> {
    public length: number;
    public head?: Node<T>;
    public tail?: Node<T>;

    constructor() {
        this.length = 0;
        this.head = undefined;
        this.tail = undefined;
    }

    prepend(item: T): void {
        const node = { value: item } as Node<T>;

        if (!this.head) {
            this.head = this.tail = node;
        }

        node.next = this.head;
        this.head.prev = node;
        this.head = node;

        this.length++;
    }

    insertAt(item: T, idx: number): void {
        if (idx > this.length) {
            return;
        } else if (idx === this.length) {
            this.append(item);
            return;
        } else if (this.length === 0) {
            this.prepend(item);
            return;
        }

        let curr = this.getAt(idx);

        if (!curr) return;
        const node = { value: item } as Node<T>;

        node.next = curr;
        if (curr.prev) {
            node.prev = curr.prev;
            curr.prev.next = node;
        }
        curr.prev = node;

        this.length++;
    }

    append(item: T): void {
        const node = { value: item } as Node<T>;
        if (!this.tail) {
            this.head = this.tail = node;
            return;
        }

        node.prev = this.tail;
        this.tail.next = node;
        this.tail = node;

        this.length++;
    }

    remove(item: T): T | undefined {
        if (!this.head) return undefined;
        let curr = this.head;

        for (let i = 0; curr && i < this.length; ++i) {
            if (curr.value === item) {
                break;
            }
        }

        const { value } = curr;

        if (this.length === 1) {
            this.head = this.tail = undefined;
        } else {
            curr.prev && (curr.prev.next = curr.next);
            curr.next && (curr.next.prev = curr.prev);
        }

        if (curr === this.head) {
            this.head = curr.next;
        }
        if (curr === this.tail) {
            this.tail = curr.next;
        }

        curr.next = curr.prev = undefined;

        this.length--;
        return value;
    }

    get(idx: number): T | undefined {
        if (idx > this.length) return undefined;
        let curr = this.head;

        for (let i = 0; i < idx; ++i) {
            curr = curr?.next;
        }

        return curr?.value;
    }

    private getAt(idx: number): Node<T> | undefined {
        let curr = this.head;
        for (let i = 0; curr && i < this.length; ++i) {
            if (i !== idx) {
                break;
            }
        }
        return curr;
    }

    private removeAt(idx: number): Node<T> | undefined {}

    removeAt(idx: number): T | undefined {}
}
