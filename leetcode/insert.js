// 35. Search Insert Position
// Easy

// 7118

// 390

// Add to List

// Share
// Given a sorted array of distinct integers and a target value, return the index if the target is found. If not, return the index where it would be if it were inserted in order.

// You must write an algorithm with O(log n) runtime complexity.

 

// Example 1:

// Input: nums = [1,3,5,6], target = 5
// Output: 2
// Example 2:

// Input: nums = [1,3,5,6], target = 2
// Output: 1
// Example 3:

// Input: nums = [1,3,5,6], target = 7
// Output: 4
 

// Constraints:

// 1 <= nums.length <= 104
// -104 <= nums[i] <= 104
// nums contains distinct values sorted in ascending order.
// -104 <= target <= 104
// Accepted
// 1,317,170
// Submissions
// 3,108,640
// Seen this question in a real interview before?

// Yes

// No



var searchInsert = function(nums, target) {
    let result = 0;
       
       if(nums.length==1 && target>nums[0]){
           return 1;
       }
       
       for(let i=0;i<nums.length-1;i++){
           if(target == nums[i]){
               result =  i;
               break;
           }else if(target>nums[i] && target<=nums[i+1]){
               result = i+1;
               break;
           }else if(target>nums[i+1] && (nums.length-1==i+1)){
               result= nums.length;
               break;
           }else if(target<nums[i] && i==0){
               result =  0;
               break;
           }else if(target>nums[i] && target>nums[i+1]){
               continue;
           }
       }
       
       return result;
       

};



let nums = [1,3,5,6], target = 7;
console.log(searchInsert(nums, target))