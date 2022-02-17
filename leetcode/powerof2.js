// 231. Power of Two
// Easy

// 2827

// 281

// Add to List

// Share
// Given an integer n, return true if it is a power of two. Otherwise, return false.

// An integer n is a power of two, if there exists an integer x such that n == 2x.

 

// Example 1:

// Input: n = 1
// Output: true
// Explanation: 20 = 1
// Example 2:

// Input: n = 16
// Output: true
// Explanation: 24 = 16
// Example 3:

// Input: n = 3
// Output: false
 

// Constraints:

// -231 <= n <= 231 - 1
 

// Follow up: Could you solve it without loops/recursion?
// Accepted
// 574,734
// Submissions
// 1,282,943
// Seen this question in a real interview before?

// Yes

// No

var isPowerOfTwo = function(n) {
    let i = 1;
    while(i < n){
        i *= 2;
    }
    return i === n;
};

let n = 6;
console.log(isPowerOfTwo(n))