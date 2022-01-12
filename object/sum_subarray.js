let arrSumEven = function(arr, k) {
    // let count = 0;
    for (let i = 0; i < arr.length; i++) {
        for (let j = i; j < arr.length; j++) {
           let newRow = [];
            for (let k = i; k <= j; k++) {
               newRow.push(arr[k]);
            }
            // console.log(newRow)
            // if(arrSum(newRow, k)){
            //     count++
            // }
        }
    }
    console.log(count)
}


let arrSum = function(newRow, k) {
    let sum = 0;
    let max = 0;
    for (let i = 0; i < newRow.length; i++) {
        if (newRow.length > max) {
            max = newRow[i];
        }
         sum += newRow[i]
    }
    console.log(sum)
    if (sum % k !== 0) {
        return true;
    }
    return false;
}
const runProgram = (input) => {
    let lines = input.trim().split("\n");
    let array =  lines[0].trim().split(" ").map(Number);
    let k = Number(array[1])  
    let arr = lines[1].trim().split(" ").map(Number);
    console.log(k, array, arr,);
    arrSumEven(arr, k);
}

if (process.env.USERNAME === "mansi") {
    runProgram(`4 3
    2 3 4 6`);
} else {
    process.stdin.resume();
    process.stdin.setEncoding("ascii");
    let read = "";
    process.stdin.on("data", function (input) {
        read += input;
    });
    process.stdin.on("end", function () {
        read = read.replace(/\n$/, "");
        read = read.replace(/\n$/, "");
        runProgram(read);
    });
    process.on("SIGINT", function () {
        read = read.replace(/\n$/, "");
        runProgram(read);
        process.exit(0);
    });
}

