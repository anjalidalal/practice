// 326. Power of Three
// Easy

// 765

// 98

// Add to List

// Share
// Given an integer n, return true if it is a power of three. Otherwise, return false.

// An integer n is a power of three, if there exists an integer x such that n == 3x.

 

// Example 1:

// Input: n = 27
// Output: true
// Example 2:

// Input: n = 0
// Output: false
// Example 3:

// Input: n = 9
// Output: true
 

// Constraints:

// -231 <= n <= 231 - 1
 

// Follow up: Could you solve it without loops/recursion?
// Accepted
// 435,680
// Submissions
// 1,007,051
// Seen this question in a real interview before?

// Yes

// No

var isPowerOfThree = function(n) {
    let i = 1;
    while(i < n){
        i *= 3;
    }
    return i === n;
};

let n = 27;
console.log(isPowerOfThree(n))