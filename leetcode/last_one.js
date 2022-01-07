var majorityElement = function(nums) {
   let obj = {}
   for (let i = 0; i < nums.length; i++) {
       if (obj[nums[i]]) {
           obj[nums[i]] = obj[nums[i]] + 1;
       }
       else{
        obj[nums[i]] = 1;
       }
   } 
   console.log(obj);
   let max = 0;
   let maxKey = "";
   for (let key in obj) {
       if (obj[key] > max) {
           max = obj[key];
           maxKey = key;
       }
   }

   return maxKey;
};
let nums =  [3,2,3,4,4,5,5,5,6,6,6,6,6]
majorityElement(nums)