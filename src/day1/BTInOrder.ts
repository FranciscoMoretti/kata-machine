function traverse(node: BinaryNode<number>, arr: number[]) {
    if( node.left){
        traverse(node.left, arr)
    }
    arr.push(node.value)
    if(node.right){
        traverse(node.right, arr)
    }
}

export default function in_order_search(head: BinaryNode<number>): number[] {
    const arr: number[] = []
    traverse(head, arr)
    return arr
}