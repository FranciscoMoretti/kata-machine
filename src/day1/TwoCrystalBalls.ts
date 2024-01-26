export default function two_crystal_balls(breaks: boolean[]): number {
    const sqrtN = Math.floor(Math.sqrt(breaks.length))
    let firstBallIdx = sqrtN
    for(; firstBallIdx<breaks.length; firstBallIdx+=sqrtN){
        if(breaks[firstBallIdx]){
            break
        }
    }
    let secondBallIdx = Math.max(firstBallIdx-sqrtN, 0)
    for (let i = secondBallIdx+1; i<= secondBallIdx+sqrtN; i++ ){
        if(breaks[i]){
            return i
        }
    }
    // Should never reach
    return -1
}

export function two_crystal_balls_draft(breaks: boolean[]): number {
    const sqrtN = Math.ceil(Math.sqrt(breaks.length))
    let firstBallIdx = sqrtN
    while(!breaks[firstBallIdx] ){
        firstBallIdx = Math.min(firstBallIdx+sqrtN, breaks.length-1)
        if(firstBallIdx == breaks.length-1){
            break
        }
    }
    let secondBallIdx = Math.max(firstBallIdx-sqrtN, 0)
    for (let i = secondBallIdx+1; i<= secondBallIdx+sqrtN; i++ ){
        if(breaks[i]){
            return i
        }
    }
    // Should never reach
    return -1
}