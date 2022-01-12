

// function cipherString(str) {
//     let result = "";
//     let i = 0;

//     while(i < str.length){
//         let count = 0;
//         let j = i;
//         for (j = i; j < str.length; j++) {
//            if (str[i] == str[j]) {
//                count++;
//            }
//         }
//         result += str[i]+count;
//         i = j;
//     }
//     return result;
// }
let str = 'aaaabbbccdd';
// console.log(cipherString(str))
let result = "";
let count = 0;
for (let i = 0; i < str.length; i++) {
    
   for (let j = 0; j < str.length; j++) {
      if (str[i] == str[j]) {
          count++;
      }
      else{
          result += str[i] + count;
          count = 1;
      }
   }
}
console.log(result)