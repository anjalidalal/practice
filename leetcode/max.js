// 485. Max Consecutive Ones
// Easy

// 2438

// 394

// Add to List

// Share
// Given a binary array nums, return the maximum number of consecutive 1's in the array.

 

// Example 1:

// Input: nums = [1,1,0,1,1,1]
// Output: 3
// Explanation: The first two digits or the last three digits are consecutive 1s. The maximum number of consecutive 1s is 3.
// Example 2:

// Input: nums = [1,0,1,1,0,1]
// Output: 2
 

// Constraints:

// 1 <= nums.length <= 105
// nums[i] is either 0 or 1.
// Accepted
// 622,846
// Submissions
// 1,133,958
// Seen this question in a real interview before?

// Yes

// No


var findMaxConsecutiveOnes = function(nums) {
    let max = 0, count = 0;
    
    for(let i = 0; i < nums.length; i++) {
        if(nums[i] === 1) {
            count++;
        }
        else{
            count = 0;
        }
        max = Math.max(max, count);
    }
    return max;
};


let  nums = [1,1,0,1,1,1];
console.log(findMaxConsecutiveOnes(nums));