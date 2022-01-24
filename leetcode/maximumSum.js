var maxSubArray = function(nums) {
    let sumArr = [];
   
    for (let i = 0; i < nums.length; i++) {
        for (let j = 0; j < nums.length; j++) {
            let newArr = []
            for (let k = i; k <= j; k++) {
               newArr.push(nums[k])
            }
            sumArr.push(SumOfSubArr(newArr))
        }
    }
    console.log(sumArr)
    let max = sumArr[0];
    for (let j = 0; j < sumArr.length; j++) {
        
        if (max > sumArr[j]) {
            max = sumArr[j]
        }  
    }
    function SumOfSubArr(newArr) {
        
        let sum = 0;
        for (let i = 0; i < newArr.length; i++) {
                sum += newArr[i];
               
        }
        return sum;
    }

    return max;

};
let nums =  [-2,-1];
console.log(maxSubArray(nums))
