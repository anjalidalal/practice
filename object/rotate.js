let r = 4;
let c = 4;
let arr = [
    [1, 2, 3, 4],
    [5, 6, 7, 8],
    [1, 2, 3, 4],
    [5, 6, 7, 8]
];
let rotation = [];
for (let i = c-1; i >= 0; i--){
    let newRow = [];
    for (let j = 0; j < arr[0].length; j++) {
        newRow.push(arr[j][i])
    }
    rotation.push(newRow);
}
console.log(rotation);   
