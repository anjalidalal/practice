// 342. Power of Four
// Easy

// 1325

// 280

// Add to List

// Share
// Given an integer n, return true if it is a power of four. Otherwise, return false.

// An integer n is a power of four, if there exists an integer x such that n == 4x.

 

// Example 1:

// Input: n = 16
// Output: true
// Example 2:

// Input: n = 5
// Output: false
// Example 3:

// Input: n = 1
// Output: true
 

// Constraints:

// -231 <= n <= 231 - 1
 

// Follow up: Could you solve it without loops/recursion?
// Accepted
// 279,071
// Submissions
// 640,881
// Seen this question in a real interview before?

// Yes

// No

/**
 * @param {number} n
 * @return {boolean}
 */

 var isPowerOfFour = function(n) {
    let i = 1;
    while(i < n){
        i *= 4;
    }
    return i === n;
};

let n = 64;
console.log(isPowerOfFour(n))