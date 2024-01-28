function walk(node: BinaryNode<number>|null, needle: number): boolean{
    if(!node){
        return false
    }
    if(node.value == needle){
        return true
    }
    if(node.value > needle){
        return walk(node.left, needle)
    }else{
        return walk(node.right, needle)
    }
}


export default function dfs(head: BinaryNode<number>, needle: number): boolean {
    return walk(head, needle)
}