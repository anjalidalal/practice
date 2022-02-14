// 219. Contains Duplicate II
// Easy

// 2136

// 1762

// Add to List

// Share
// Given an integer array nums and an integer k, return true if there are two distinct indices i and j in the array such that nums[i] == nums[j] and abs(i - j) <= k.

 

// Example 1:

// Input: nums = [1,2,3,1], k = 3
// Output: true
// Example 2:

// Input: nums = [1,0,1,1], k = 1
// Output: true
// Example 3:

// Input: nums = [1,2,3,1,2,3], k = 2
// Output: false
 

// Constraints:

// 1 <= nums.length <= 105
// -109 <= nums[i] <= 109
// 0 <= k <= 105
// Accepted
// 424,840
// Submissions
// 1,050,421
// Seen this question in a real interview before?

// Yes

// No


var containsNearbyDuplicate = function (nums, k) {
    if (nums.length === 1) {
        return false;
    }
    for (let i = 0; i < nums.length; i++) {
        for (let j = 0; j < nums.length; j++) {
            if (i !== j && nums[i] === nums[j] && Math.abs(i - j) <= k) {
                return true
            }
        }
    }
    return false;
};
let nums = [1], k = 1
console.log(containsNearbyDuplicate(nums, k))