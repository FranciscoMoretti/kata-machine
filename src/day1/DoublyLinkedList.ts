class Node<T> {
    public value: T;
    public prev?: Node<T>;
    public next?: Node<T>;
}

export default class DoublyLinkedList<T> {
    public length: number;
    public head?: Node<T>;
    public tail?: Node<T>;

    constructor() {
        this.length = 0;
        this.head = this.tail = undefined;
    }

    prepend(item: T): void {
        const node = { value: item, prev: undefined, next: this.head };
        this.length++;
        if (this.head) {
            this.head.prev = node;
        } else {
            this.tail = node;
        }
        this.head = node;
    }
    insertAt(item: T, idx: number): void {
        if (idx > this.length) {
            throw new Error("Oh no");
        }
        if (idx == 0) {
            return this.prepend(item);
        } else if (idx == this.length) {
            return this.append(item);
        }

        this.length++;
        let next = this.getAt(idx);
        const prev = next?.prev;
        const node = { value: item, prev: prev, next: next };

        if (prev) {
            prev.next = node;
        }
        if (next) {
            next.prev = node;
        }
    }

    append(item: T): void {
        const node = { value: item, prev: this.tail, next: undefined };
        if (this.tail) {
            this.tail.next = node;
        } else {
            this.head = node;
        }
        this.tail = node;
        this.length++;
    }
    remove(item: T): T | undefined {
        let node = this.head;
        for (let i = 0; i < this.length; i++) {
            if (node?.value == item) {
                this.removeNode(node);
                return node?.value;
            }
            node = node?.next;
        }
        return undefined;
    }
    get(idx: number): T | undefined {
        const node = this.getAt(idx);
        return node?.value;
    }
    removeAt(idx: number): T | undefined {
        const node = this.getAt(idx);
        this.removeNode(node);
        return node?.value;
    }
    removeNode(node: Node<T> | undefined) {
        const prev = node?.prev;
        const next = node?.next;
        // Remove output
        if (prev?.next) {
            prev.next = next;
        } else {
            this.head = next;
        }
        if (next?.prev) {
            next.prev = prev;
        } else {
            this.tail = prev;
        }

        // Clean up output
        if (node?.prev) {
            node.prev = undefined;
        }
        if (node?.next) {
            node.next = undefined;
        }
        if (node) {
            this.length--;
        }
    }

    getAt(idx: number): Node<T> | undefined {
        let next = this.head;
        for (let i = 0; i < idx; i++) {
            next = next?.next;
        }
        return next;
    }
}
