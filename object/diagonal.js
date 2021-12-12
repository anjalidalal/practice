let arr = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];
let r = 3;
let c = 3;
for (let i = 0; i < r; i++) {
    for (let j = 0; j < c; j++) {
        if (i - j == -1) {
            console.log(arr[i][j]);
        }
        else if (i + j == 3) {
            console.log(arr[j][i]);
            console.log(arr[i][j])
        }
    }
    
}