// 125. Valid Palindrome
// Easy

// 3189

// 4899

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
// 1,159,375
// Submissions
// 2,826,264
// Seen this question in a real interview before?

// Yes

// No

// Problems



var isPalindrome = function(s) {
    var i = 0;
  var j = s.length - 1;
  var x = '';
  var y = '';
  while (i < j) {
    m = s[i].toLowerCase();
    n = s[j].toLowerCase();
    if (!isLetterOrDigit(x)) i++;
    else if (!isLetterOrDigit(y)) j--;
    else if (x === y) { i++; j--; }
    else return false;
  }
  return true;
};

var isLetterOrDigit = function (c) {
  return (c >= 'a' && c <= 'z') || (c >= '0' && c <= '9');
};

let s = "A man, a plan, a canal: Panama";
console.log(isPalindrome(s))