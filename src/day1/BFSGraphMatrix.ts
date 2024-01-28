export default function bfs(graph: WeightedAdjacencyMatrix, source: number, needle: number): number[] | null {
    const numNodes = graph.length
    
    const seen = new Array(numNodes).fill(false)
    const prev = new Array(numNodes).fill(-1)
    const queue: number[]= []
    queue.push(source)
    seen[source] = true
    do{
        const curr  = queue.shift() as number
        if(curr == needle){
          break 
        }
        const adjacents = graph[curr]
        for(let i=0; i<adjacents.length; i++){
            if(adjacents[i] === 0 || seen[i]){
                continue
            }

            seen[i] = true
            prev[i] = curr
            queue.push(i)
        }
    }while(queue.length)

    // Build it backwards
    let curr = needle
    const out: number[]= []

    while(prev[curr] !== -1){
        out.push(curr)
        curr = prev[curr]
    }
    if(out.length){
        return [source].concat(out.reverse())
    }
    return null
}