// write a function which accepts array and integer n, the function should calculate the max sum of n consecutive elements in array

// number of consecutive elements to be summed up
// arr is input array

function maxArraySum(arr, num){
    if(num > arr.length){
        return null
    }
    var max = -Infinity
  
    for(let i =0; i<arr.length-num+1; i++){
        temp =0;
      console.log('----------------------------------------------')
        for(let j=0; j<num; j++){
            temp+=arr[i+j]
            console.log('Adding Indexes: '+i+' '+j+' Adding Result: arr['+(i+j)+']'+' which is '+arr[i+j])
        }
        console.log('----------------------------------------------')
        console.log('Addition of 3 items - Temp: '+temp)
        if(max<temp){
            max = temp
        }
        console.log('Current Max: '+max)
        console.log('              ')
    }
    return max;
}

console.log(maxArraySum([1,2,3,3,3,3,3,4,4,5], 3)) //O(n^2)