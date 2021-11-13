const runProgram = (input) => {
    let arr = (input.trim().split(" ").map(Number));
    let num = arr[0];
    console.log(num);
    switch (num) {
        case 1:
            console.log("Monday");
            break;
        case 2:
            console.log("Tuesday;");
            break;
        case 3:
            console.log("Wednesday");
            break;
        case 4:
            console.log("Thursday");
            break
        case 5:
            console.log("Friday");
            break; 
        case 6:
            console.log("Saturday");
            break;
        case 7:
            console.log("Sunday");
            break;                     
        default:
            break;
    }
}

if (process.env.USERNAME === "mansi") {
     runProgram(`7`);
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
 