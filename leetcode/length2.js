// 137. Single Number II
// Medium

// 3791

// 465

// Add to List

// Share
// Given an integer array nums where every element appears three times except for one, which appears exactly once. Find the single element and return it.

// You must implement a solution with a linear runtime complexity and use only constant extra space.

 

// Example 1:

// Input: nums = [2,2,3,2]
// Output: 3
// Example 2:

// Input: nums = [0,1,0,1,0,1,99]
// Output: 99
 

// Constraints:

// 1 <= nums.length <= 3 * 104
// -231 <= nums[i] <= 231 - 1
// Each element in nums appears exactly three times except for one element which appears once.
// Accepted
// 333,792
// Submissions
// 593,639
// Seen this question in a real interview before?

// Yes

// No


var singleNumber = function(nums) {
    let obj = {}
     for(let i = 0; i < nums.length; i++) {
         if(obj[nums[i]]){
             obj[nums[i]] = obj[nums[i]] + 1;
         }
         else{
             obj[nums[i]] = 1;
         }
     }
     for (const key in obj) {
         if (obj[key] === 1) {
            return key;
         }
     }
 };


let nums = [2,2,3,2];
console.log(singleNumber(nums))