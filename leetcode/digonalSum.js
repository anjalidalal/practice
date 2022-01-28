function arrDiagonalSum(arr) {
    let left = 0;
    let right = arr.length-1;
    let top = 0;
    let bottom = arr.length-1;
    
    let sum = 0;
    
    for (let i = left; i <= right; i++) {
        sum += arr[top][i];
    }
    top++;
    for (let i = top; i <= bottom; i++) {
        sum += arr[i][right];
    }
    right--;
    for (let i = right; i >= left; i--) {
        sum+=arr[bottom][i];
    }
    bottom--;
    for (let i = bottom; i >= top; i--) {
        sum += arr[i][left]
    }
    left++;
    for (let i = left; i <= right; i++) {
        for (let j = top; j <= bottom; j++) {
            if (i === j) {
                sum +=  arr[i][j];
            }
            else if(i + j === 4) {
                sum += arr[i][j]
            }
        }
    }
    console.log(sum)
}


const runProgram = (input) => {
    let lines = input.trim().split("\n");
    let arr = [];
    for (let i = 1; i < lines.length; i++) {
        let array = lines[i].trim().split(" ").map(Number);
        arr.push(array);
    }
    arrDiagonalSum(arr)
}

if (process.env.USERNAME === "mansi") {
    runProgram(`5
    1 2 3 4 5
    6 7 8 9 1
    2 3 4 5 6
    7 8 9 1 2
    3 4 5 6 7`);
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


