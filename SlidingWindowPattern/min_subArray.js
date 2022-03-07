function minArraySum(arr, num){
    let maxSum = 0;
    let tempSum = 0;
    if(arr.length<num) return null
    for(let i=0; i<num; i++){
        maxSum+=arr[i]
    }
    tempSum = maxSum

    for(let i=num; i<arr.length; i++){
        console.log('TempSum: '+tempSum)
        console.log('Adding arr['+i+']: '+arr[i]+' Substracting arr['+(i-num)+']: '+arr[i-num])

      // sum = sum + next element - first element of old set
        tempSum = tempSum + arr[i] - arr[i-num]
        maxSum = Math.min(tempSum, maxSum)
    }
    return maxSum;
}


minArraySum([1,2,3,3,3,3,3,4,4,5], 3) //O(n)