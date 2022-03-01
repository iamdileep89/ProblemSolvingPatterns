// in this approach we divide arr/strings/data into smaller sets/chunks and repeat the process with the subset of data
// this pattern tremendously decrease timecomplexity




function search(arr, val){
    let min=0;
    let max = arr.length-1

    while(min<=max){
        let middle = Math.floor((min+max)/2);
        let currentElement = arr[middle];
        if(arr[middle]<val){
            min = middle+1
        } else if(arr[middle]>val){
            max = middle-1
        } else {
            return middle
        }
    }
    return -1
}

search([1,2,3,4,5], 5) // Binary search O(n)