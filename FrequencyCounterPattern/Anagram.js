// Check if 2 strings are Anagrams

function anagram(first, second){
    if(first.length !== second.length){
        return false
    }
    const lookup = {}
    for(let i=0; i<first.length; i++){
        let letter = first[i]
        //if letter exists in lookup, increment 1 or set 1
        lookup[letter] ? lookup[letter]+=1 : lookup[letter]=1
        console.log(lookup)
    }
    
    for(let i=0;i<second.length; i++){
        const letter = second[i]
        // check if letter is in lookup, if yes decrement 1
        if(!lookup[letter]){
            return false
        } else {
            lookup[letter] -= 1
        }
        console.log(lookup)
    }

    return true
}

anagram('anagram', 'nagaram') // true
