let check = function (n) {
    let mintues = n % 60;
    let hr = Math.floor(n/60) ;
    let mintue;
    if (n == 60) {
        console.log("1hr");
    }
    else if (n > 60 && n < 120) {
        mintue = n - 60;
        console.log('1hr' + ' ' + mintue + 'mins');
    }
    else if (n == 120) {
        console.log('2hrs' + ' ' + '00mins');
    }
    else if (n > 120) {
        console.log(hr + 'hrs' + ' ' + mintues + 'mins');
    }
}
const runProgram = (input) => {
    let n = Number(input);
    // console.log(n)
    check(n);
}

if (process.env.USERNAME === "mansi") {
    runProgram(`485`);
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
