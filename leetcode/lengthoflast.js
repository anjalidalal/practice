// 58. Length of Last Word
// Easy

// 647

// 56

// Add to List

// Share
// Given a string s consisting of some words separated by some number of spaces, return the length of the last word in the string.

// A word is a maximal substring consisting of non-space characters only.

 

// Example 1:

// Input: s = "Hello World"
// Output: 5
// Explanation: The last word is "World" with length 5.
// Example 2:

// Input: s = "   fly me   to   the moon  "
// Output: 4
// Explanation: The last word is "moon" with length 4.
// Example 3:

// Input: s = "luffy is still joyboy"
// Output: 6
// Explanation: The last word is "joyboy" with length 6.
 

// Constraints:

// 1 <= s.length <= 104
// s consists of only English letters and spaces ' '.
// There will be at least one word in s.
// Accepted
// 672,935
// Submissions
// 1,840,831
// Seen this question in a real interview before?

// Yes

// No

// Problems

var lengthOfLastWord = function(s) {

    let arr = s.trim().split(" ");    
    let last = arr.reverse();
    
    for (let i = 0; i <  last.length; i++) {
       return last[0].length
    }

};

s =  "Hello World"
console.log(lengthOfLastWord(s))