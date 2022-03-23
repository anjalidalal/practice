// 1523. Count Odd Numbers in an Interval Range
// Easy

// 504

// 46

// Add to List

// Share
// Given two non-negative integers low and high. Return the count of odd numbers between low and high (inclusive).

 

// Example 1:

// Input: low = 3, high = 7
// Output: 3
// Explanation: The odd numbers between 3 and 7 are [3,5,7].
// Example 2:

// Input: low = 8, high = 10
// Output: 1
// Explanation: The odd numbers between 8 and 10 are [9].
 

// Constraints:

// 0 <= low <= high <= 10^9
// Accepted
// 55,572
// Submissions
// 112,858
// Seen this question in a real interview before?

// Yes

// No


var countOdds = function(low, high) {
    let count = 0;
    
    for(let i = low; i <= high; i++){
        if(i % 2 !== 0) count++
    }
    return count;
};

let low = 8, high = 10;
console.log(countOdds(low, high))