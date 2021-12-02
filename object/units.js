let check = function (num) {
  let units = 0;
  let n = num - 80;
  if (n > 650) {
    units = units + 150;
    n = n - 650;
    units = units + n / 10;
  } else if (n > 150) {
    units = units + 50;
    n = n - 150;
    units = units + n / 5;
  } else {
    units = units + n / 3;
  }
  console.log(units)
};
const runProgram = (input) => {
  let num = Number(input);
  check(num);
};

if (process.env.USERNAME === "mansi") {
  runProgram(`930`);
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
