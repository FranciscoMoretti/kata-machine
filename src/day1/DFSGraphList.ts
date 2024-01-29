
function walk(graph: WeightedAdjacencyList, curr: number, needle: number, seen: boolean[], path: number[]): number[] | null{
    // Base
    if(curr === needle){
        return path
    }

    // Recurse
    const adjacents = graph[curr]
    for(let i=0; i< adjacents.length; i++){
        const adj = adjacents[i]
        if(seen[adj.to]){
            continue
        }
        seen[adj.to] = true
        path.push(adj.to)
        if(walk(graph, adj.to, needle, seen, path)){
            return path
        }
        path.pop()
    }
    return null
}

export default function dfs(graph: WeightedAdjacencyList, source: number, needle: number): number[] | null {
    const numNodes = graph.length
    const seen = new Array(numNodes).fill(false)
    const path: number[] = [source]
    return walk(graph, source, needle, seen, path)
}