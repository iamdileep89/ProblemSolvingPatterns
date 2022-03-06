//check if the arguments consists of duplicates

// frequency counter
function areThereDuplicates(...args){
    let collection = {}
    for(let key in args){
        collection[key] = (collection[key]||0)+1
    }

    for(let key in collection){
        if(collection[key]>1){
            return true
        }
    }
    return false
}

// multiple  Pointers
function areThereDuplicates(...args){
    //sort the array first
    args.sort((a,b) => a-b)

    let start = 0;
    let next = 1

    while(next<arr.length){
        if(args[start]==args[next]){
            return true
        }
        start++
        next++
    }
    return false
}

//one liner solution
function areThereDuplicates(){
    return new Set(arguments).size !== arguments.length)
}


areThereDuplicates(a,b,c) // false
areThereDuplicates(1, 3, 2, 3) // true