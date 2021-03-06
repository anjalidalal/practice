// 459. Repeated Substring Pattern
// Easy

// 3168

// 307

// Add to List

// Share
// Given a string s, check if it can be constructed by taking a substring of it and appending multiple copies of the substring together.

 

// Example 1:

// Input: s = "abab"
// Output: true
// Explanation: It is the substring "ab" twice.
// Example 2:

// Input: s = "aba"
// Output: false
// Example 3:

// Input: s = "abcabcabcabc"
// Output: true
// Explanation: It is the substring "abc" four times or the substring "abcabc" twice.
 

// Constraints:

// 1 <= s.length <= 104
// s consists of lowercase English letters.
// Accepted
// 232,649
// Submissions
// 534,332
// Seen this question in a real interview before?

// Yes

// No


var repeatedSubstringPattern = function(s) {
    return  s.repeat(2).slice(1, -1).includes(s);
};


let s = "abab";
console.log(repeatedSubstringPattern(s))