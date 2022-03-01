// search a given element in array

function search(arr, val){
    for(let i=0; i<arr.length; i++){
        if(arr[i]===val){
            return i
        }
    }
    return -1
}

search([1,2,3,4,5], 5) // linear search O(n)