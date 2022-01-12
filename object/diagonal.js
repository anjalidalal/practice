let arr = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];
let r = 3;
let c = 3;
for (let i = 0; i < arr.length; i++) {
    let newrow = []
    for (let j = 0; j < arr.length; j++) {
        if (i - j == -1) {
           newrow.push(arr[i][j]);
        }
        else if (i + j == 3) {
            newrow.push(arr[j][i]);
            newrow.push(arr[i][j])
        }
       
    }
     console.log(newrow)
}