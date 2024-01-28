
export default function bfs(head: BinaryNode<number>, needle: number): boolean {
    if(head.value == needle){
        return true
    }
    const queue: (BinaryNode<number>)[]  = []

    enqueueChildren(head, queue)

    while(queue.length){
        const node = queue.shift() as BinaryNode<number>
        if(node?.value == needle){
            return true
        }
        enqueueChildren(node, queue)
    }
    return false
}

function enqueueChildren(node: BinaryNode<number>, queue: (BinaryNode<number> | null | undefined)[]) {
    if (node.left) {
        queue.push(node.left)
    }
    if (node.right) {
        queue.push(node.right)
    }
}
