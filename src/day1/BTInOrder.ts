function traverse(node: BinaryNode<number> | null, arr: number[]): number[] {
    if(!node){
        return arr
    }

    traverse(node.left, arr)
    arr.push(node.value)
    traverse(node.right, arr)
    return arr
}

export default function in_order_search(head: BinaryNode<number>): number[] {
    return traverse(head, [])
}