// Given two strings s and p, return an array of all the start indices of p's anagrams in s. You may return the answer in any order.

// An Anagram is a word or phrase formed by rearranging the letters of a different word or phrase, typically using all the original letters exactly once.

 

// Example 1:

// Input: s = "cbaebabacd", p = "abc"
// Output: [0,6]
// Explanation:
// The substring with start index = 0 is "cba", which is an anagram of "abc".
// The substring with start index = 6 is "bac", which is an anagram of "abc".
// Example 2:

// Input: s = "abab", p = "ab"
// Output: [0,1,2]
// Explanation:
// The substring with start index = 0 is "ab", which is an anagram of "ab".
// The substring with start index = 1 is "ba", which is an anagram of "ab".
// The substring with start index = 2 is "ab", which is an anagram of "ab".
 

// Constraints:

// 1 <= s.length, p.length <= 3 * 104
// s and p consist of lowercase English letters.


var findAnagrams = function (s, p) {
    let result = [];
    for (let i = 0; i <= s.length - p.length; i++) {
        const subStr = s.substring(i, i + p.length)
        if (anagramSubStr(p, subStr)) {
            result.push(i)
        }
    }


    function anagramSubStr(p, subStr) {
        let obj = {}
        if (p.length !== subStr.length) {
            return false;
        }
        for (let i = 0; i < p.length; i++) {
            if (obj[p[i]]) {
                obj[p[i]] = obj[p[i]] + 1;
            }
            else {
                obj[p[i]] = 1;
            }
        }
        for (let i = 0; i < subStr.length; i++) {
            if (obj[subStr[i]]) {
                obj[subStr[i]] = obj[subStr[i]] - 1;
            }
            else {
                return false;
            }
        } 
         
        for (let key in obj) {
            if (obj[key] !== 0) {
                return false
            }
        }

        return true;
    }

    return result;
};

let s = "abab", p = "ab";

console.log(findAnagrams(s, p))