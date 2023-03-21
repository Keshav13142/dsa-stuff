type QStack<T> = {
    value: T;
    next?: QStack<T> | undefined;
};

export default class Stack<T> {
    public length: number;
    private top?: QStack<T>;

    constructor() {
        this.length = 0;
        this.top = undefined;
    }

    push(item: T): void {
        const node = { value: item } as QStack<T>;

        if (!this.top) {
            this.top = node;
        } else {
            node.next = this.top;
            this.top = node;
        }

        this.length++;
    }

    pop(): T | undefined {
        if (!this.top) {
            return undefined;
        }

        this.length--;

        const { value } = this.top;
        this.top = this.top.next;

        if (this.length === 0) {
            this.top = undefined;
        }

        return value;
    }

    peek(): T | undefined {
        return this.top?.value;
    }
}
