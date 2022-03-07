function findLongestSubstring(str) {
  let longest = 0;
  let seen = {};
  let start = 0;
 
  for (let i = 0; i < str.length; i++) {
    let char = str[i];
    if (seen[char]) {
      start = Math.max(start, seen[char]);
    }
    // index - beginning of substring + 1 (to include current in count)
    longest = Math.max(longest, i - start + 1);
    // store the index of the next char so as to not double count
    seen[char] = i + 1;
  }
  return longest;
}

findLongestSubstring('pwwkew')

// 'ab0c0ed'

// longest=0;
// start=0
// i=0
// longest=1
// seen['a']=1


// longest=1;
// start=0
// i=1
// longest=2
// seen['b']=2

// longest=2;
// start=0
// i=2
// longest=3
// seen['0']=3

// longest=3;
// start=0
// i=3
// longest=4
// seen['c']=4

// longest=4;
// start=3
// i=4
// longest=4
// seen['0']=5

// longest=4;
// start=3
// i=5
// longest=4
// seen['e']=6



