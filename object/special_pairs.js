let arr = [1, 2, 3, 5, 7, 12];
for (let i = 0; i < arr.length; i++) {
   for (let j = 1; j < arr.length; j++) {
       if (i < j) {
           let difference = j-i;
          if (difference % !== 0) {
              console.log('(', i, j, ')')
          }
       }
   }
}
