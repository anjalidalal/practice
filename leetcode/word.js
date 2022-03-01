// 290. Word Pattern
// Easy

// 3352

// 383

// Add to List

// Share
// Given a pattern and a string s, find if s follows the same pattern.

// Here follow means a full match, such that there is a bijection between a letter in pattern and a non-empty word in s.

 

// Example 1:

// Input: pattern = "abba", s = "dog cat cat dog"
// Output: true
// Example 2:

// Input: pattern = "abba", s = "dog cat cat fish"
// Output: false
// Example 3:

// Input: pattern = "aaaa", s = "dog cat cat dog"
// Output: false
 

// Constraints:

// 1 <= pattern.length <= 300
// pattern contains only lower-case English letters.
// 1 <= s.length <= 3000
// s contains only lowercase English letters and spaces ' '.
// s does not contain any leading or trailing spaces.
// All the words in s are separated by a single space.
// Accepted
// 346,191
// Submissions
// 862,612
// Seen this question in a real interview before?

// Yes

// No

// Problems


var wordPattern = function(pattern, str) {
    let hash = {};
   let splits = str.split(' ');
   if (pattern.length !== splits.length) return false;
   
   for (let i = 0; i < splits.length; i++) {
       if (hash[pattern[i]] === undefined) {
           if (splits.slice(0, i).includes(splits[i])) return false;
           hash[pattern[i]] = splits[i];
       } else if (hash[pattern[i]] !== splits[i]) {
           return false;
       }
   }
   
   return true;
};

let pattern = "abba", str = "dog cat cat dog";

console.log(wordPattern(pattern, str))