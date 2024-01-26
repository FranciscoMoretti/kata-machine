export default function bs_list(haystack: number[], needle: number): boolean {
    let low = 0
    let high = haystack.length-1
    while (low <= high){
        let mid = Math.floor((low + high)/2)
        const value = haystack[mid]
        if (value === needle){
            return true
        }
        if (value < needle){
            low = mid + 1
        }else{
            high = mid - 1
        }
    }
    return false

}