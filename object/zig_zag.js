let arr = [
    [4, 7, 1, 1, 7],
    [8, 9, 9, 6, 1],
    [6, 4, 9, 5, 1],
    [7, 7, 4, 7, 7],
    [8, 6, 2, 5, 5]
];
let r = 5;
let c = 5;
for (let i = 0; i < arr.length; i++) {
   if (i % 2 ==0) {
       for (let j = c-1; j >= 0; j--) {
        console.log(arr[i][j])   
       }
   }
   else if (i % 2 !== 0) {
    for (let k = 0; k < c; k++) {
        console.log(arr[i][k])   
       }
   } 
}