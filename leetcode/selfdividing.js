// 728. Self Dividing Numbers
// Easy

// 1086

// 345

// Add to List

// Share
// A self-dividing number is a number that is divisible by every digit it contains.

// For example, 128 is a self-dividing number because 128 % 1 == 0, 128 % 2 == 0, and 128 % 8 == 0.
// A self-dividing number is not allowed to contain the digit zero.

// Given two integers left and right, return a list of all the self-dividing numbers in the range [left, right].

 

// Example 1:

// Input: left = 1, right = 22
// Output: [1,2,3,4,5,6,7,8,9,11,12,15,22]
// Example 2:

// Input: left = 47, right = 85
// Output: [48,55,66,77]
 

// Constraints:

// 1 <= left <= right <= 104
// Accepted
// 170,993
// Submissions
// 222,790
// Seen this question in a real interview before?

// Yes

// No


var selfDividingNumbers = function(left, right) {
    let arr = [];
    for(let i = left; i <= right; i++) {
        if(checkDigits(i)){
            arr.push(i)
        }
    }
    return arr;
};

var checkDigits = function(num) {
    if(num < 10){
        return true;
    }
    let temp = num;
    while(temp > 0){
        let cur = temp % 10;
        if(cur === 0 || num % cur !== 0){
            return false;
        }
        temp = Math.floor(temp / 10)
    }
    return true
}

let left = 1, right = 22;
console.log(selfDividingNumbers(left, right))