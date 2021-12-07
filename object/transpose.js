let r = 5;
let c = 4;
let arr = [
    [0, 0, 0, 0],
    [1, 1, 1, 1],
    [2, 2, 2, 2],
    [3, 3, 3, 3]
];
let transpose = [];
for (let i = 0; i < arr[0].length; i++){
    let newRow = [];
    for (let j = 0; j < c; j++) {
        newRow.push(arr[j][i])
    }
    transpose.push(newRow);
}
console.log(transpose);   
