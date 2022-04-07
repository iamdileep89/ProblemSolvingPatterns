/*
Reference:
https://www.youtube.com/watch?v=WKTgajDkVcA
*/


function longestSubString(s){
    let left=0, right=0;
    let set = new Set();
    let maxLen =0

    while(right<s.length){
        if(!set.has(s.charAt(right))){
            set.add(s.charAt(right))
            maxLen = Math.max(maxLen, set.size)
            right++
        } else {
            set.delete(s.charAt(left))
            left++
        }
    }
    return maxLen;
}

function longestSubString1(s){
    let left=0, right=0;
    let map = {} 
    let mapkeysLength = 0
    let maxLen =0

    while(right <s.length){
        if(!(s.charAt(right) in map)){
            map[s.charAt(right)] = (map[s.charAt(right)] || 0)+1
            mapkeysLength++
            maxLen = Math.max(maxLen,mapkeysLength)
            right++
        } else {
            delete map[s.charAt(left)]
            mapkeysLength--
            left++
        }
    }
    return maxLen;
}

longestSubString('pwwkew')
longestSubString1('pwwkew')