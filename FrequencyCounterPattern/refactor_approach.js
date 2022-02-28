// This pattern uses objects or sets to collect values/frequencies of values
//This can often avoid the need for nested loops or O(n^2) operations with arrays/strings

function same(arr1, arr2){
  if(arr1.length !== arr2.length){
    return false
  }
  let frequencyCounter1 = {}
  let frequencyCounter2 = {}
  // check frequency of values in arr1
  for(let val of arr1){
    frequencyCounter1[val] = (frequencyCounter1[val] || 0)+1
  }
  console.log(frequencyCounter1)
  
  // check frequency of values in arr2
  for(let val of arr2){
    frequencyCounter2[val] = (frequencyCounter2[val] || 0)+1
  }
  console.log(frequencyCounter2)

  
  for(let key in frequencyCounter1){
    // check if square of key in counter1 is present as key in counter2
    if(!(key**2 in frequencyCounter2)){
      return false
    }
    // check key of counter2 is the square of the key of counter1
    if(frequencyCounter2[key**2] !== frequencyCounter1[key]){
      return false
    }
  }
  return true
}

console.log(same([1,2,3,2],[9,1,4,8])) // returns true with O(n) complexity