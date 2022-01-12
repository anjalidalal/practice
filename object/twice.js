function frequency(arr) {
    let obj = {}
    for (let i = 0; i < arr.length; i++) {
        if (obj[arr[i]]) {
            obj[arr[i]] = obj[arr[i]] + 1;
        }
        else{
            obj[arr[i]] = 1;
        }
    }
    for (let key in obj) {
        if (obj[key] == 1) {
            console.log(key)
        }
    }
}
let arr = [1, 2, 1, 3, 2]
frequency(arr);
// const runProgram = (input) => {
//     let lines = input.trim().split("\n");
//     let newArr = [];
//     for (let i = 1; i < lines.length; i++) {
//         let arr = lines[i].trim().split(" ").map(Number);
//         newArr.push(arr);
//     }
//     for (let i = 1; i < newArr.length; i+=2) {
//     //    console.log(newArr[i]);
//        frequency(newArr);
//     }
    
// }

// if (process.env.USERNAME === "mansi") {
//     runProgram(`2
// 1
// 5
// 5
// 1 2 1 3 2`);
// } else {
//     process.stdin.resume();
//     process.stdin.setEncoding("ascii");
//     let read = "";
//     process.stdin.on("data", function (input) {
//         read += input;
//     });
//     process.stdin.on("end", function () {
//         read = read.replace(/\n$/, "");
//         read = read.replace(/\n$/, "");
//         runProgram(read);
//     });
//     process.on("SIGINT", function () {
//         read = read.replace(/\n$/, "");
//         runProgram(read);
//         process.exit(0);
//     });
// }
