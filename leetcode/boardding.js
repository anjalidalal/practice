function check(arr1, arr2) {
    for (let i = 0; i < arr1.length; i++) {
        for (let j = 0; j < arr2.length; j++) {
            if (arr1[j] > 15 || arr2[j] > 7) {
                console.log('Stop')
            }
            else if (arr1[i] < 15 || arr2[j] < 7) {
                console.log('Boarding')
            }   
        }
        break
    }
}
const runProgram = (input) => {
    let lines = (input.trim().split("\n"));
    for (let i = 1; i < lines.length; i++) {
        let arr1 = lines[1].trim().split(" ").map(Number);
        let arr2 = lines[2].trim().split(" ").map(Number);
        // console.log(arr1, arr2);
        check(arr1, arr2)
        break;
    }
}

if (process.env.USERNAME === "mansi") {
     runProgram(`4
     12 34 21 8
     6 7 3 4`);
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
 