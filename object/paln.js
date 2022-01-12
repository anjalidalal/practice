let arr = [
    [1, 2, 3, 4],
    [5, 6, 7, 8],
    [9, 10, 11, 12],
    [13, 14, 15, 16, 17]
]
for (let i = 0; i < arr[0].length; i++) {
    let newRow = [];
    for (let j = 0; j < arr.length; j++) {
        if (i + j === 0) {
           newRow.push(arr[i][j]);
        }
        else if (i + j === 1) {
            newRow.push(arr[i][j]);
        }
        else if (i + j === 2) {
            newRow.push(arr[i][j]);
        }
        else if (i + j === 3) {
            newRow.push(arr[i][j]);
        }
        else if(i + j === 4) {
            newRow.push(arr[i][j]);
        }
        else if(i + j === 5) {
            newRow.push(arr[i][j]);
        }
        else if(i + j === 6) {
            newRow.push(arr[i][j]);
        }
    }
    console.log(newRow.join(" "))
}