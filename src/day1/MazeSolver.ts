function walk(maze: string[], seen: boolean[][], wall: string, current: Point, end: Point): Point[] | undefined{
    // Base
    if(current.x > maze[0].length-1 || current.x<0){
        return undefined
    }
    if(current.y > maze.length || current.y<0){
        return undefined
    }
    if(seen[current.y][current.x]){
        return undefined
    }
    if(maze[current.y][current.x] == wall){
        return undefined
    }
    if(arePointsEqual(current, end)){
        return [current]
    }


    // Recurse
    const {x, y} = current
    const neighbours = [
        {x: x+1, y},
        {x: x-1, y},
        {x, y:y+1},
        {x, y:y-1},
    ]
    seen[current.y][current.x] = true
    for (let point of neighbours){
        const result = walk(maze, seen, wall, point, end)
        if(result){
            return [current].concat(result)
        }
    }
    return undefined



}

function arePointsEqual(point1: Point, point2: Point): boolean{
    return  point1.x == point2.x && point1.y == point2.y
}

export default function solve(maze: string[], wall: string, start: Point, end: Point): Point[] {
    const seen: boolean[][]= new Array(maze.length).fill(null).map(() => new Array(maze[0].length).fill(false))

    const result = walk(maze, seen, wall, start, end)
    if(result){
        return result
    }
    return []

}