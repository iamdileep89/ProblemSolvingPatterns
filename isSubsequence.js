// Write a function to check if every letter in str1 is present in str2


// Multiple Pointers Pattern
function isSubsequence(str1, str2){
    let i = 0;
    let j = 0;
    if(!str1) return true

    while(j<str2.length){
        if(str1[i]==str2[j]){
            i++
        }
        if(i==str1.length){
            return true
        }
        j++
    }
    return false
}

isSubsequence('hello', 'hello world') // true
isSubsequence('sing', 'sting') // true