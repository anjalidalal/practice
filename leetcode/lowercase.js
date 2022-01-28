// Given a string s, return the string after replacing every uppercase letter with the same lowercase letter.



// Example 1:

// Input: s = "Hello"
// Output: "hello"
// Example 2:

// Input: s = "here"
// Output: "here"
// Example 3:

// Input: s = "LOVELY"
// Output: "lovely"
var toLowerCase = function (str) {
    let newstr = ""
    for (let i = 0; i < str.length; i++) {
        if (str[i].toUpperCase()) {
            newstr += str[i].toLowerCase()
        }
    }
    console.log(newstr)

};
let str = "HelloWorlD HEY";
toLowerCase(str)

