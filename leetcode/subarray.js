let subArrSum = function(arr, k) {
    let count = 0;
    for (let i = 0; i < arr.length; i++) {
        for (let j = i; j < arr.length; j++) {
           let newRow = [];
            for (let k = i; k <= j; k++) {
               newRow.push(arr[k]);
            }
            if(arrSum(newRow, k)){
                count++
            }
        }
    }

    function arrSum(newRow, k) {
        let sum = 0;
        for (let i = 0; i < newRow.length; i++) {
             sum += newRow[i]
        }
        if (sum === k) {
            return true;
        }
        return false;
    } 


    return count;
}



let arr = [1,2,3], k = 3;
console.log(subArrSum(arr, k))