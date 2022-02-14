// 387. First Unique Character in a String
// Easy

// 4488

// 181

// Add to List

// Share
// Given a string s, find the first non-repeating character in it and return its index. If it does not exist, return -1.

 

// Example 1:

// Input: s = "leetcode"
// Output: 0
// Example 2:

// Input: s = "loveleetcode"
// Output: 2
// Example 3:

// Input: s = "aabb"
// Output: -1
 

// Constraints:

// 1 <= s.length <= 105
// s consists of only lowercase English letters.
// Accepted
// 967,780
// Submissions
// 1,712,335
// Seen this question in a real interview before?

// Yes

// No


let  s = "aabb"
function check(){
    let obj = {}
    for (let i = 0; i < s.length; i++) {
       if (obj[s[i]]) {
           obj[s[i]] = obj[s[i]] + 1;
       }
       else{
           obj[s[i]] = 1
       }
    }

    function unique(obj, s){
        for (let key in obj) {
            if (obj[key] === 1) {
                return s.indexOf(key)
            }
        }
        return -1;
    }

    return unique(obj, s)
}
console.log(check(s))
