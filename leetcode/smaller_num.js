// Given an array of positive integers arr, calculate the sum of all possible odd-length subarrays.

// A subarray is a contiguous subsequence of the array.

// Return the sum of all odd-length subarrays of arr.

 

// Example 1:

// Input: arr = [1,4,2,5,3]
// Output: 58
// Explanation: The odd-length subarrays of arr and their sums are:
// [1] = 1
// [4] = 4
// [2] = 2
// [5] = 5
// [3] = 3
// [1,4,2] = 7
// [4,2,5] = 11
// [2,5,3] = 10
// [1,4,2,5,3] = 15
// If we add all these together we get 1 + 4 + 2 + 5 + 3 + 7 + 11 + 10 + 15 = 58
// Example 2:

// Input: arr = [1,2]
// Output: 3
// Explanation: There are only 2 subarrays of odd length, [1] and [2]. Their sum is 3.
// Example 3:

// Input: arr = [10,11,12]
// Output: 66

var smallerNumbersThanCurrent = function(nums) {
    let oddSum = 0;
    for (let i = 0; i < nums.length; i++) {
        for (let j = 0; j < nums.length; j++) {
            let newArr = []
            for (let k = i; k <= j; k++) {
               newArr.push(nums[k])
            }
           oddSum += oddSubArr(newArr);
        }
    }
    return oddSum;
    function oddSubArr(newArr) {
       
        let sum = 0;
        if (newArr.length % 2 !== 0) {
            for (let i = 0; i < newArr.length; i++) {
                sum += newArr[i]
            }
        }
        return sum;
    }
};

let  nums = [1,2,2,3];
console.log(smallerNumbersThanCurrent(nums))
