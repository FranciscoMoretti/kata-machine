class Node<T>{
    public next?: Node<T>
    public item: T
}

export default class Stack<T> {
    public length: number;
    public head?: Node<T>

    constructor() {
        this.head = undefined
        this.length = 0
    }

    push(item: T): void {
        this.head = {item:item, next: this.head}
        this.length++
}
    pop(): T | undefined {
        if(!this.head){
            return undefined
        }
        this.length--
        const item = this.head.item
        this.head = this.head.next
        return item
}
    peek(): T | undefined {
        return this.head?.item
}
}