// 532. K-diff Pairs in an Array
// Medium

// 2081

// 1907

// Add to List

// Share
// Given an array of integers nums and an integer k, return the number of unique k-diff pairs in the array.

// A k-diff pair is an integer pair (nums[i], nums[j]), where the following are true:

// 0 <= i < j < nums.length
// |nums[i] - nums[j]| == k
// Notice that |val| denotes the absolute value of val.

 

// Example 1:

// Input: nums = [3,1,4,1,5], k = 2
// Output: 2
// Explanation: There are two 2-diff pairs in the array, (1, 3) and (3, 5).
// Although we have two 1s in the input, we should only return the number of unique pairs.
// Example 2:

// Input: nums = [1,2,3,4,5], k = 1
// Output: 4
// Explanation: There are four 1-diff pairs in the array, (1, 2), (2, 3), (3, 4) and (4, 5).
// Example 3:

// Input: nums = [1,3,1,5,4], k = 0
// Output: 1
// Explanation: There is one 0-diff pair in the array, (1, 1).
 

// Constraints:

// 1 <= nums.length <= 104
// -107 <= nums[i] <= 107
// 0 <= k <= 107

var findPairs = function (nums, k) {
    const unique = new Set();

    for (let i = 0; i < nums.length; i++) {
        for (let j = i + 1; j < nums.length; j++) {
                if (Math.abs(nums[i] - nums[j]) === k) {
                    unique.add([nums[i], nums[j]].sort((a, b) => a - b).join(""));
                }         
        }
    }
    return unique.size;
};

nums = [3, 1, 4, 1, 5, 5, 3], k = 2
console.log(findPairs(nums, k))
