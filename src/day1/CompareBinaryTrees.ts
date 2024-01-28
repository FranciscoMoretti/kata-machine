

export default function compare(a: BinaryNode<number> | null, b: BinaryNode<number> | null): boolean {
    // Base case
    if(a=== null && b===null){
        return true
    }else if(a=== null || b=== null ){
        return false
    }else if(a.value !== b.value){
        return false
    }

    // Recurse
    return compare(a.left, b.left) && compare(a.right, b.right)
}


type NodeTuple = [BinaryNode<number>, BinaryNode<number>]

export function compareTrees(head1: BinaryNode<number>| null, head2: BinaryNode<number>|null): boolean {
    // Only compare structure for now
    if(Boolean(head1) !== Boolean(head2)){
        return false
    }
    if(!head1 || !head2){
        return true
    }

    const queue: (NodeTuple)[]  = []
    if(!isEqualNodeStructure(head1, head2)){
        return false
    }

    if (head1.left && head2.left) {
        queue.push([head1.left, head2.left])
    }
    if (head1.right  && head2.right) {
        queue.push([head1.right, head2.right])
    }


    while(queue.length){
        const [node1, node2] = queue.shift() as NodeTuple
        // Only compare structure
        // if(node?.value == needle){
        //     return true
        // }
        if(!isEqualNodeStructure(node1,node2)){
            return false
        }
        if (node1.left && node2.left) {
            queue.push([node1.left, node2.left])
        }
        if (node1.right  && node2.right) {
            queue.push([node1.right, node2.right])
        }
        }
    return true
}

function isEqualNodeStructure(head1: BinaryNode<number>, head2: BinaryNode<number>) {
    return Boolean(head1.left) == Boolean(head2.left) && Boolean(head1.right) == Boolean(head2.right)
}
