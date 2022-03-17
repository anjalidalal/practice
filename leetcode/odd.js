// 1550. Three Consecutive Odds
// Easy

// 342

// 46

// Add to List

// Share
// Given an integer array arr, return true if there are three consecutive odd numbers in the array. Otherwise, return false.
 

// Example 1:

// Input: arr = [2,6,4,1]
// Output: false
// Explanation: There are no three consecutive odds.
// Example 2:

// Input: arr = [1,2,34,3,4,5,7,23,12]
// Output: true
// Explanation: [5,7,23] are three consecutive odds.
 

// Constraints:

// 1 <= arr.length <= 1000
// 1 <= arr[i] <= 1000
// Accepted
// 48,283
// Submissions
// 75,177
// Seen this question in a real interview before?

// Yes

// No

var threeConsecutiveOdds = function(arr) {
    
    for(var i = 0; i < arr.length - 2; i++){
        
        if (arr[i] % 2 !== 0 && arr[i + 1 ] % 2 !== 0 && arr[i + 2] % 2 !== 0)
            
            return true;
        
    }
        
    return false
};

let arr = [1,2,34,3,4,5,7,23,12];

console.log(threeConsecutiveOdds(arr))