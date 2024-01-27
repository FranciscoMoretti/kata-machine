function traverse(node: BinaryNode<number>, arr: number[]) {
    arr.push(node.value)
    if( node.left){
        traverse(node.left, arr)
    }
    if(node.right){
        traverse(node.right, arr)
    }
}

export default function pre_order_search(head: BinaryNode<number>): number[] {
    const arr: number[] = []
    traverse(head, arr)
    return arr
}