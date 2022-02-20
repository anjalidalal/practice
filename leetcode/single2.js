// 260. Single Number III
// Medium

// 3676

// 177

// Add to List

// Share
// Given an integer array nums, in which exactly two elements appear only once and all the other elements appear exactly twice. Find the two elements that appear only once. You can return the answer in any order.

// You must write an algorithm that runs in linear runtime complexity and uses only constant extra space.

 

// Example 1:

// Input: nums = [1,2,1,3,2,5]
// Output: [3,5]
// Explanation:  [5, 3] is also a valid answer.
// Example 2:

// Input: nums = [-1,0]
// Output: [-1,0]
// Example 3:

// Input: nums = [0,1]
// Output: [1,0]
 

// Constraints:

// 2 <= nums.length <= 3 * 104
// -231 <= nums[i] <= 231 - 1
// Each integer in nums will appear twice, only two integers will appear once.
// Accepted
// 244,119
// Submissions
// 364,285
// Seen this question in a real interview before?

// Yes

// No

// Problems


var singleNumber2 = function(nums) {
    let obj = {}
    for(let i = 0; i < nums.length; i++) {
        if(obj[nums[i]]){
            obj[nums[i]] = obj[nums[i]] + 1;
        }
        else{
            obj[nums[i]] = 1;
        }
    }
    let arr = []
    for (const key in obj) {
        if (obj[key] === 1) {
          arr.push(key)
        }
    }
    return  arr.map(Number)
};

let  nums = [-1,0]
console.log(singleNumber2(nums))
