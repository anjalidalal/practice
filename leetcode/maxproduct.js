// 628. Maximum Product of Three Numbers
// Easy

// 2489

// 510

// Add to List

// Share
// Given an integer array nums, find three numbers whose product is maximum and return the maximum product.

 

// Example 1:

// Input: nums = [1,2,3]
// Output: 6
// Example 2:

// Input: nums = [1,2,3,4]
// Output: 24
// Example 3:

// Input: nums = [-1,-2,-3]
// Output: -6
 

// Constraints:

// 3 <= nums.length <= 104
// -1000 <= nums[i] <= 1000
// Accepted
// 197,781
// Submissions
// 422,668

var maximumProduct = function(nums) {
    
    var n = nums.length; 
    nums.sort(function (a,b) {return b-a}); 
        
    var maximum = nums[0]*nums[1]*nums[2]; 
    s = Math.max(maximum,nums[0]*nums[n-1]*nums[n-2]);
        
    return s
    };


    let nums = [-1,-2,-3]
    console.log(maximumProduct(nums))