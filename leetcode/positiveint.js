// 507. Perfect Number
// Easy

// 519

// 816

// Add to List

// Share
// A perfect number is a positive integer that is equal to the sum of its positive divisors, excluding the number itself. A divisor of an integer x is an integer that can divide x evenly.

// Given an integer n, return true if n is a perfect number, otherwise return false.

 

// Example 1:

// Input: num = 28
// Output: true
// Explanation: 28 = 1 + 2 + 4 + 7 + 14
// 1, 2, 4, 7, and 14 are all divisors of 28.
// Example 2:

// Input: num = 7
// Output: false
 

// Constraints:

// 1 <= num <= 108
// Accepted
// 97,813
// Submissions
// 260,850
// Seen this question in a real interview before?

// Yes

// No



var checkPerfectNumber = function (num) {
    let i = 0, sum = 0;
    
    while (i < num) {
        if (num % i === 0) {
            sum += i
        }
        i++
    }
    
    return num === sum;
};

let num = 100000000;
console.log(checkPerfectNumber(num))

//SECOND SOLUTION

// var checkPerfectNumber = function(num) {
//     if(num === 1){
//         return false;
//     }
//      let sum = 1;
    
//     for (let i = 2; i < Math.sqrt(num); i++) {
//         if (num % i === 0) {
//             sum = sum + i + num/i
//         }
//     }
    
//     return num === sum;
// };