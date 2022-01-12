function traverse2D(newArr1, newArr2) {
    let newRow1 = [];
    for (let i = 0; i < newArr1[0].length; i++) {
        if (i % 2 === 0) {
            for (let j = 0; j < newArr1.length; j++) {
                newRow1.push(newArr1[i][j])
            }
        } 
        else if (i % 2 !== 0) {
            for (let k = newArr1.length-1; k >= 0; k--) {
                console.log({k})
                newRow1.push(newArr1[i][k])
            }
        }
    }
    console.log(newRow1.join(" "));

    let newRow2 = [];
    for (let i = 0; i < newArr2[0].length; i++) {
        if (i%2 === 0) {
            for (let j = newArr2.length-1; j >= 0; j--) {
                newRow2.push(newArr2[i][j])
            }
        } 
        else if (i % 2 !== 0) {
            for (let k = 0; k < newArr2.length; k++) {
                newRow2.push(newArr2[i][k])
            }
        }

    }
    console.log(newRow2.join(" "));

}
const runProgram = (input) => {
    let lines = input.trim().split("\n");
    let newArr1 = [];
    let newArr2 = []
    for (let i = 2; i < lines.length; i++) {
        if (i <= 4) {
            let arr1 = lines[i].trim().split(" ").map(Number);
            newArr1.push(arr1);
        }
        else if (i > 5){
            let arr2 = lines[i].trim().split(" ").map(Number);
            newArr2.push(arr2)
        }
        
    }
    traverse2D(newArr1, newArr2)
}

if (process.env.USERNAME === "mansi") {
    runProgram(`1
    7 7 2
    11 36 58 33 66 70 31
    54 42 77 39 15 85 54
    76 98 26 8 5 93 13
    72 51 24 76 67 68 55
    64 36 23 45 25 63 10
    32 12 79 43 47 25 46
    42 43 79 67 69 42 54 `);
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
