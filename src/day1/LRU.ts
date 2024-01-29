
type Node<T> = {
    value: T,
    next?: Node<T>,
    prev?: Node<T>,
}


function createNode<V>(value: V): Node<V> {
    return {value}
}

export default class LRU<K, V> {
    private length: number;
    private head?: Node<V>;
    private tail?: Node<V>;

    private lookup: Map<K, Node<V>>
    // To find lookup keys when evicted
    private reverseLookup: Map<Node<V>, K>

    constructor(private capacity: number=10) {
        this.length = 0
        this.head = this.tail = undefined
        this.lookup = new Map<K, Node<V>>()
        this.reverseLookup = new Map<Node<V>, K>()
    }

    update(key: K, value: V): void {
        // Does it exist?
        let node = this.lookup.get(key)

        if(!node){
            // If it does't we need to insert
            //    - check capacity and evict if over
            node = createNode(value)
            this.length++
            this.prepend(node)
            this.trimCache()
            // Update lookups
            this.lookup.set(key, node)
            this.reverseLookup.set(node, key)

        }else{
            // If it does
            //    - update the value and move it to the front
            this.detach(node)
            this.prepend(node)
            node.value = value
        }
    }

    get(key: K): V | undefined {
        // Check the cache for existence
        const node = this.lookup.get(key)
        if(!node){
            return undefined
        }

        // Update the value we found and move it to the front
        this.detach(node)
        this.prepend(node)

        // Return the value found
        return node.value
    }

    private detach(node: Node<V>):void{
        if(node.prev){
            node.prev.next = node.next
        } 
        if(node.next) {
            node.next.prev = node.prev
        }

        // tail head checking
        if(this.head === node){
            this.head = this.head.next
        }
        if(this.tail === node){
            this.tail = this.tail.prev
        }

        node.next = undefined
        node.prev = undefined
    }

    private prepend(node: Node<V>):void{
        if(!this.head){
            this.head = this.tail = node
        }

        node.next = this.head
        this.head.prev = node
        this.head = node
    }

    private trimCache():void{
        if(this.length <= this.capacity){
            return
        }
        const tail = this.tail as Node<V>
        this.detach(this.tail as Node<V>)
        // Remove from lookups
        const key = this.reverseLookup.get(tail) as K
        this.lookup.delete(key)
        this.reverseLookup.delete(tail)
        this.length--
    }
}