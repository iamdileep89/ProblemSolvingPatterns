// we mainter multiple pointers or values that correspond to the index or postion and move towards begining, end or middle based on certain condition

// very efficient for solving problems with minimal space complexity



function sumZero(arr){
    let left = 0;
    let right = arr.length-1;

    while(left < right){ // left should be always less than right which is fail safe during 0 == 0
        let sum = arr[left]+arr[right]
        console.log(arr[left], arr[right], sum)
        if(sum == 0){
            return [arr[left], arr[right]]
        } else if(sum > 0){
            right--
        } else {
            left++
        }
    }
}

sumZero([-4, -3, -2, -1, 0, 1, 2, 5]) // [-2, 2]

