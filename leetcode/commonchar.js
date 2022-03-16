// 1002. Find Common Characters
// Easy

// 2199

// 181

// Add to List

// Share
// Given a string array words, return an array of all characters that show up in all strings within the words (including duplicates). You may return the answer in any order.

 

// Example 1:

// Input: words = ["bella","label","roller"]
// Output: ["e","l","l"]
// Example 2:

// Input: words = ["cool","lock","cook"]
// Output: ["c","o"]
 

// Constraints:

// 1 <= words.length <= 100
// 1 <= words[i].length <= 100
// words[i] consists of lowercase English letters.
// Accepted
// 138,434
// Submissions
// 202,421
// Seen this question in a real interview before?

// Yes

// No

// Problems



var commonChars = function(words) {
    let arr = [];
   for(let char of words[0]){
       let isCommon = true;
       for(let i=1;i<words.length;i++){
           if(words[i].includes(char)){
               words[i] = words[i].replace(char, '');
           }
           else{
               isCommon = false;
               break;
           }
       }
       if(isCommon) arr.push(char);
   }
   return arr;
};


let  words = ["bella","label","roller"];

console.log(commonChars(words))