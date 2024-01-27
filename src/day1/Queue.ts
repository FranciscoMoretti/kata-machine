export class Node<T> {
    next?: Node<T>
    item: T
}

export default class Queue<T> {
    public length: number;
    private head?: Node<T>
    private tail?: Node<T>

    constructor() {
        this.head = this.tail = undefined
        this.length = 0
    }

    enqueue(item: T): void {
        this.length++
        const node = { next: undefined, item: item };
        if(!this.tail){
            this.head = this.tail = node
            console.log(this.head)
            return
        }
        this.tail.next = node
        this.tail = node
        console.log(this.head)
}
    deque(): T | undefined {
        if(!this.head){
            return undefined
        }
        this.length--
        const item = this.head.item
        this.head = this.head.next
        if(!this.head){
            this.tail = undefined
        }
        return item
}
    peek(): T | undefined {
        return this.head?.item
}
}