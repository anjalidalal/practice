// 283. Move Zeroes
// Easy

// 8280

// 225

// Add to List

// Share
// Given an integer array nums, move all 0's to the end of it while maintaining the relative order of the non-zero elements.

// Note that you must do this in-place without making a copy of the array.

 

// Example 1:

// Input: nums = [0,1,0,3,12]
// Output: [1,3,12,0,0]
// Example 2:

// Input: nums = [0]
// Output: [0]
 

// Constraints:

// 1 <= nums.length <= 104
// -231 <= nums[i] <= 231 - 1
 

// Follow up: Could you minimize the total number of operations done?
// Accepted
// 1,532,374
// Submissions
// 2,542,115
// Seen this question in a real interview before?

// Yes

// No



var moveZeroes = function(nums) {
    let index = 0;
   for (let i = 0; i < nums.length; i++) {
       const num = nums[i]
       if (nums[i] !== 0) {
          nums[index] = num; 
           index++;
       }
   }
    for (let i = index; i < nums.length; i++) {
        nums[i] = 0;
   }
   
};

let nums = [0,1,0,3,12]
console.log(moveZeroes(nums))