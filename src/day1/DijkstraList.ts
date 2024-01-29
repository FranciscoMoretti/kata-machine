export default function dijkstra_list(
source: number,
sink: number,
arr: WeightedAdjacencyList,
):number[]{
    const seen = new Array(arr.length).fill(false)
    const distances = new Array(arr.length).fill(Infinity)
    const previous = new Array(arr.length).fill(-1)

    distances[source] = 0;

    while(hasUnvisited(seen, distances)){
        const curr = getLowestUnvisited(seen, distances)
        if(curr == -1){
            continue
        }

        seen[curr] = true
        const adjs = arr[curr]
        for (let i =0; i < adjs.length; i++){
            const edge = adjs[i]
            if(seen[edge.to]){
                continue
            }

            const dist = distances[curr] + edge.weight
            if(dist < distances[edge.to]){
                distances[edge.to ]= dist
                previous[edge.to ]= curr
            }
        }

    }

    const out: number[] = []
    let curr = sink

    while(previous[curr] != -1 ){
        out.push(curr)
        curr = previous[curr]
    }

    out.push(source)
    return out.reverse()



    return []
}


function hasUnvisited(seen: boolean[], distances: number[]): boolean{
 return seen.some((isSeen, i) => !isSeen && distances[i] < Infinity )

}

function getLowestUnvisited(seen: boolean[], distances: number[]): number {
    let idx = -1
    let lowestDistance = Infinity

    for(let i=0; i < seen.length ; ++i){
        if(seen[i]){
            continue
        }

        if( distances[i] < lowestDistance){
            lowestDistance = distances[i]
            idx = i
        }

    }
    return idx

}