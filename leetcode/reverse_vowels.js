// Given a string s, reverse only all the vowels in the string and return it.

// The vowels are 'a', 'e', 'i', 'o', and 'u', and they can appear in both cases.

 

// Example 1:

// Input: s = "hello"
// Output: "holle"
// Example 2:

// Input: s = "leetcode"
// Output: "leotcede"
 


var reverseVowels = function(s) {
    let vowels = [];
    for (let i = 0; i < s.length; i++) {
        if (s[i] === 'A' || s[i] === 'E' || s[i] === 'I' || s[i] === 'O' || s[i] === 'U' || s[i] === 'a' || s[i] === 'e' || s[i] === 'i' || s[i] === 'o' || s[i] === 'u') {
            vowels.push(s[i])
        }
    }

    let result = "";
    let target = vowels.length-1;
     
    for (let i = 0; i < s.length; i++) {
        if (s[i] === 'A' || s[i] === 'E' || s[i] === 'I' || s[i] === 'O' || s[i] === 'U' || s[i] === 'a' || s[i] === 'e' || s[i] === 'i' || s[i] === 'o' || s[i] === 'u') {
            
            result += vowels[target];
            target--;
        }
        else{
            result += s[i];
        }
    }
    return result;
};
let s = "hello"
console.log(reverseVowels(s))
