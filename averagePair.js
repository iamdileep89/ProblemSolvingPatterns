// write a function to check if avg of any 2 elements is equal to the targetted avg given as paramerter

// function accepts sorted array and targeted avg value

// Mutiple Pointer Solution
function averagePair(arr, val){
    if(arr.length ==0) return false

    let left = 0;
    let right = arr.length-1

    while(left<right){
        let sum = arr[left]+arr[right]
        let avg = sum/2

        if(avg == val){
            return true
        } else if(avg > val){
            right--
        } else {
            left++
        }
    }
    return false
}



averagePair([1,3,3,5,6,7,10,12,19], 8)
averagePair([],4)