function reverseSpiral(arr) {
    let right = arr.length - 1,
        left = 0,
        top = 0,
        bottom = arr.length - 1;
        let result = []
    while (top <= bottom && left <= right) {
        
        for (let row = top; row <= bottom; row++) {
            result.push(arr[row][right])
        }
        // console.log('left', left, 'right', right, 'top', top, 'bottom', bottom)
        right--;
        for (let col = right; col >= left; col--) {
            result.push(arr[bottom][col])
        }
        bottom--;
        for (let row = bottom; row >= top; row--) {
            result.push(arr[row][left])
        }
        left++;
        for (let row = top; row < bottom; row++) {
            result.push(arr[row][left])
        }
        top++
    }
    console.log(result.join(" "))
}

const runProgram = (input) => {
    let lines = input.trim().split("\n");
    let newArr = [];
    for (let i = 2; i < lines.length; i++) {
        let arr = lines[i].trim().split(" ").map(Number);
        newArr.push(arr);
    }
    reverseSpiral(newArr)
}

if (process.env.USERNAME === "mansi") {
    runProgram(`1
   3
   7 8 1
   6 9 2
   5 4 3`);

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
