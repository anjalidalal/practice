// 896. Monotonic Array
// Easy

// 1377

// 52

// Add to List

// Share
// An array is monotonic if it is either monotone increasing or monotone decreasing.

// An array nums is monotone increasing if for all i <= j, nums[i] <= nums[j]. An array nums is monotone decreasing if for all i <= j, nums[i] >= nums[j].

// Given an integer array nums, return true if the given array is monotonic, or false otherwise.

 

// Example 1:

// Input: nums = [1,2,2,3]
// Output: true
// Example 2:

// Input: nums = [6,5,4,4]
// Output: true
// Example 3:

// Input: nums = [1,3,2]
// Output: false
 

// Constraints:

// 1 <= nums.length <= 105
// -105 <= nums[i] <= 105
// Accepted
// 190,607
// Submissions
// 326,201
// Seen this question in a real interview before?

// Yes

// No

// Problems


var isMonotonic = function(array) {
    if (!array.length || array.length === 1) return true;
    let increasing = true;
    if (array[0] > array[array.length - 1]) increasing = false;
    let i = 0;
    while (i < array.length - 1) {
        if (!increasing) {
            if (array[i] >= array[i + 1]) {
                i++;
            } else {
                return false
            }
        }
        else {
            if (array[i] <= array[i + 1]) {
                i++;
            } else {
                return false
            }
        }
    }
    return true;
};


let array = [1,2,2,3];
console.log(isMonotonic(array))