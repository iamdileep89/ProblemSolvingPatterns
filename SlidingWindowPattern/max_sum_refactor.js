// in this pattern we create a window which can either be an array or number
// from one postion to another
// depending on the certain condition, window either closes or increases
// very useful to keep track of subset of data in arr/string


function maxArraySum(arr, num){
    let maxSum = 0;
    let tempSum = 0;
    if(arr.length<num) return null
    for(let i=0; i<num; i++){
        maxSum+=arr[i]
    }
    tempSum = maxSum

    for(let i=num; i<arr.length; i++){
        tempSum = tempSum - arr[i-num]+arr[i]
        maxSum = Math.max(tempSum, maxSum)
    }
    return maxSum;
}


maxArraySum([1,2,3,3,3,3,3,4,4,5], 3) //O(n)
