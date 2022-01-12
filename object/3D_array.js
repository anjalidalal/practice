let arr = [1, 2, 3, 4, 5, 6, 7, 8];
let newRow = [];
for (let i = 0; i < arr.length; i++) {
   for (let j = 0; j < arr.length; j++) {
     
     for (let k = 0; k <= 2; k++) {
         newRow.push(arr[k]);
     } 
  
   }
}
console.log(newRow)