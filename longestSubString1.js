// Sliding Window Pattern -- Top companies repeated question

function maxLengthSubString(s){
    let max =0;
    let begin = 0;
    let map = {}

    for(let end=0; end<s.length; end++){
        if(map[s[end]] !== undefined && map[s[end]] >= begin){
            begin = map[s[end]]+1
        }
        map[s[end]]=end
        max = Math.max(max, end-begin+1)
    }
    return max

}

maxLengthSubString('pwwkew')

// 'ab0c0ed'

// end=0
// begin=0
// map['a']=0
// max =1

// end=1
// begin=0
// map['b']=1
// max=2

// end=2
// begin=0
// map['0']=2
// max=3

// end=3
// begin=0
// map['c']=3
// max=4


// end=4
// begin=0
// map['0'] is 2 which is > begin(0)
// then begin = map['0']+1 which is  2+1=3, begin =3
// map['0']=4
// max=4

// end=5
// begin=3
// map['e']=5
// max=4

// end=6
// begin=3
// map['d']=6
// max=4


