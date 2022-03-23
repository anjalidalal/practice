// 125. Valid Palindrome
// Easy

// 3277

// 4967

// Add to List

// Share
// A phrase is a palindrome if, after converting all uppercase letters into lowercase letters and removing all non-alphanumeric characters, it reads the same forward and backward. Alphanumeric characters include letters and numbers.

// Given a string s, return true if it is a palindrome, or false otherwise.

 

// Example 1:

// Input: s = "A man, a plan, a canal: Panama"
// Output: true
// Explanation: "amanaplanacanalpanama" is a palindrome.
// Example 2:

// Input: s = "race a car"
// Output: false
// Explanation: "raceacar" is not a palindrome.
// Example 3:

// Input: s = " "
// Output: true
// Explanation: s is an empty string "" after removing non-alphanumeric characters.
// Since an empty string reads the same forward and backward, it is a palindrome.
 

// Constraints:

// 1 <= s.length <= 2 * 105
// s consists only of printable ASCII characters.
// Accepted
// 1,181,513
// Submissions
// 2,868,952
// Seen this question in a real interview before?

// Yes

// No


var isPalindrome = function(s) {
    // s = s.replace(/[^a-z0-9]/gi, '').toLowerCase()
    // return s.split('').reverse().join('') === s

     s =  s.replace(/[^a-z0-9]/gi, '').toLowerCase();
    console.log(s)
};

let s = "race a car";

console.log(isPalindrome(s))