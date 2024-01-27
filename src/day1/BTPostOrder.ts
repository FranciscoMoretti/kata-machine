function traverse(node: BinaryNode<number>, arr: number[]) {
    if( node.left){
        traverse(node.left, arr)
    }
    if(node.right){
        traverse(node.right, arr)
    }
    arr.push(node.value)
}


export default function post_order_search(head: BinaryNode<number>): number[] {
    const arr: number[] = []
    traverse(head, arr)
    return arr

}