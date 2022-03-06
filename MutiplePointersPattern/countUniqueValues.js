// write a function which accepts sorted array and counts unique values
// there can be negative numbers but are always sorted


// Multiple Pointers Pattern
function uniqueCounterValues(arr){
    if(arr.length == 0) return 0;
    let i = 0
    let j = i+1

    while(j<arr.length){
        if(arr[i]!==arr[j]){
            i++
            arr[i] = arr[j]
            j++
            console.log(arr)
        } else {
            j++
            console.log(arr)
        }
    }

    return i+1
}



// another approach using for loop
function uniqueCounterValues(arr){
    if(arr.length == 0) return 0;
    var i =0
    for(let j=1; j<arr.length; j++){
        if(arr[i] !== arr[j]){
            i++
            arr[i] = arr[j]
        }
    }
    return i+1
}



uniqueCounterValues([1, 1, 1, 2, 3, 3, 4, 4, 5, 6])