
var findMaxLength = function (nums) {
    const count = (arr) => {
        let c1 = 0,
            c0 = 0;

        for (let i = 0; i < arr.length; i++) {
            if (arr[i] === 0) {
                c0++;
            } else {
                c1++;
            }
        }

        return c1 === c0;
    };

    let max = 0;

    for (let i = 0; i < nums.length; i++) {
        let subArr = [];
        for (let j = i; j < nums.length; j++) {
            subArr.push(nums[j]);
            if (count(subArr)) {
                max = Math.max(max, subArr.length);
            }
        }
    }

    return max;
};

let nums = [0, 1, 0];

console.log(findMaxLength(nums));
//   for (let i = 0; i < nums.length; i++) {
//     for (let j = 0; j < nums.length; j++) {
//         let subArr = [];
//         for (let k = i; k <= j; k++) {
//             subArr.push(nums[k])
//         }
//         console.log(subArr)
//     }
//   }