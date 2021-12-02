let check = function(str1, str2){
    if (str1.length !== str2.length) {
        return "False";
    }  
    
    let obj = {};
    for (let i = 0; i < str1.length; i++) {
        if (obj[str1[i]]) {
            obj[str1[i]] = obj[str1[i]] + 1;
        }
        else {
            obj[str1[i]] = 1;
        }
    }

    for (let i = 0; i < str2.length; i++) {
        if (obj[str2[i]]) {
            obj[str2[i]] = obj[str2[i]] - 1;
        }
        else {
            obj[str2[i]] = 1;
        }
    }

    for (let key in obj) {
        if (obj[key] !== 0) {
            return "False"
        }
    }
    return "True";
}

const runProgram = (input) => {
    let lines = input.trim().split("\n");
    let str1 = (lines[0].trim().split(" ").join(""));
    let str2 = (lines[1].trim().split(" ").join(""));
    console.log(check(str1, str2));
}

if (process.env.USERNAME === "mansi") {
   runProgram(`   anagram     
        nag a ram    `);
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
