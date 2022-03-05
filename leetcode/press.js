// 925. Long Pressed Name
// Easy

// 1515

// 235

// Add to List

// Share
// Your friend is typing his name into a keyboard. Sometimes, when typing a character c, the key might get long pressed, and the character will be typed 1 or more times.

// You examine the typed characters of the keyboard. Return True if it is possible that it was your friends name, with some characters (possibly none) being long pressed.

 

// Example 1:

// Input: name = "alex", typed = "aaleex"
// Output: true
// Explanation: 'a' and 'e' in 'alex' were long pressed.
// Example 2:

// Input: name = "saeed", typed = "ssaaedd"
// Output: false
// Explanation: 'e' must have been pressed twice, but it was not in the typed output.
 

// Constraints:

// 1 <= name.length, typed.length <= 1000
// name and typed consist of only lowercase English letters.
// Accepted
// 88,701
// Submissions
// 254,039
// Seen this question in a real interview before?

// Yes

// No

// Problem


var isLongPressedName = function(names, typed) {
    let c = 0;
    for(let i=0; i<typed.length; i++){
        if(c < names.length && names[c] == typed[i])   c++;
        else if(i == 0 || typed[i] != typed[i-1])  return false;
    }
    return c == names.length;
};



let names = "saeed", typed = "ssaaedd";
console.log(isLongPressedName(names))