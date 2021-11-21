 let check = function(newz, eng){
    if (newz[0] > eng[0]) {
        console.log("Newzeland")
    }
    else if (newz[0] == eng[0]) {
        if (newz[1] > eng[1]) {
            console.log("Newzeland")
        } 
        else {
            console.log("England")
        }
    }
    else if (newz[1] == eng[1]) {
        
        if (newz[2] > eng[2]) {
           console.log("Newzeland")
        }
        else {
           console.log("England")
        }
    }
    else {
        console.log("England")
    }
}
const runProgram = (input) => {
    let lines = input.trim().split("\n");
    for (let i = 0; i < lines.length; i++) {
        let newz = lines[0].trim().split(" ").map(Number);
        let eng = lines[1].trim().split(" ").map(Number);
        check(newz, eng);
        break;
    }
    }

if (process.env.USERNAME === "mansi") {
   runProgram(`230 48 9
   233 45 10`);
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
