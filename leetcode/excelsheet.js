// 168. Excel Sheet Column Title
// Easy

// 2563

// 389

// Add to List

// Share
// Given an integer columnNumber, return its corresponding column title as it appears in an Excel sheet.

// For example:

// A -> 1
// B -> 2
// C -> 3
// ...
// Z -> 26
// AA -> 27
// AB -> 28 
// ...
 

// Example 1:

// Input: columnNumber = 1
// Output: "A"
// Example 2:

// Input: columnNumber = 28
// Output: "AB"
// Example 3:

// Input: columnNumber = 701
// Output: "ZY"
 

// Constraints:

// 1 <= columnNumber <= 231 - 1
// Accepted
// 301,482
// Submissions
// 897,159
// Seen this question in a real interview before?

// Yes

// No

// Problems

var convertToTitle = function(x) {
    let str = "";
    let key = "ZABCDEFGHIJKLMNOPQRSTUVWXY";
    if(x <= 0) {
        return str;
    }
    
    while(x > 0) {
        let place = x  % 26;
        str = key[place] + str;
        x = place === 0 ? Math.floor(x / 26) - 1 : Math.floor(x / 26)
    }
    
    return str;
};

let x = 32;
console.log(convertToTitle(x))