// Find out if the 2 numbers have same frequency of digits

// Frequency Counter Pattern
function sameFrequency(val1, val2){
    val1 = val1.toString();
    val2 = val2.toString();

    if(val1.length != val2.length) return false

    let frequencyVal1 = {}
    let frequencyVal2 = {}

    for(let i=0; i<val1.length; i++){
        frequencyVal1[val1[i]] = (frequencyVal1[val1[i]] || 0)+1
    }

    for(let i=0; i<val2.length; i++){
        frequencyVal2[val2[i]] = (frequencyVal2[val2[i]] || 0)+1
    }

    for(let key in frequencyVal1){
        if(!(key in frequencyVal2)) return false
        if(!(frequencyVal1[key] == frequencyVal2[key])){
            return false
        }
    }
    return true
}

sameFrequency(182,281)
sameFrequency(182458,281854)