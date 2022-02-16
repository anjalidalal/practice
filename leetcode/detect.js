// 520. Detect Capital
// Easy

// 1545

// 358

// Add to List

// Share
// We define the usage of capitals in a word to be right when one of the following cases holds:

// All letters in this word are capitals, like "USA".
// All letters in this word are not capitals, like "leetcode".
// Only the first letter in this word is capital, like "Google".
// Given a string word, return true if the usage of capitals in it is right.

 

// Example 1:

// Input: word = "USA"
// Output: true
// Example 2:

// Input: word = "FlaG"
// Output: false
 

// Constraints:

// 1 <= word.length <= 100
// word consists of lowercase and uppercase English letters.
// Accepted
// 256,758
// Submissions
// 460,726


var detectCapitalUse = function(str) {
    let count = 0;
     for (let i = 0; i < str.length; i++) {
         const char = str[i]
         if (char === char.toUpperCase()) {
             count += 1;
         } 
     }
     return (count === str.length ||
             count === 0 ||
             (str[0] === str[0].toUpperCase() && count === 1));
 };
 
 let str = "FlaG"
 console.log(detectCapitalUse(str))
 
 