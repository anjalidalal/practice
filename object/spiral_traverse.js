function spiral_traverse(arr) {
    let top = 0;
    let bottom = arr.length-1;
    let left = 0;
    let right = arr.length-1;
    let  res = [];
    while(top <= bottom && left <= right) {
       
        for (let col = left; col <= right; col++) {
           res.push(arr[top][col]) 
        }
        top++;
        for (let row = top; row <= bottom; row++) {
            res.push(arr[row][right])
        }
        right--;
        for (let col = right; col >=left; col--) {
            res.push(arr[bottom][col])
        }
        bottom--;
        for (let row = bottom; row >= top; row--) {
            res.push(arr[row][left])
        }
        left++;
    }
    console.log(res.join(" "))
}
const runProgram = (input) => {
    let lines = input.trim().split("\n");
    let arr = [];
    for (let i = 1; i < lines.length; i++) {
       let array = lines[i].trim().split(" ").map(Number)
       arr.push(array)
    }
    spiral_traverse(arr)
}

if (process.env.USERNAME === "mansi") {
    runProgram(`4
    1 2 3 4
    5 6 7 8
    1 2 3 4
    5 6 7 8`);
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
