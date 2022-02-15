// 28. Implement strStr()
// Easy

// 3556

// 3320

// Add to List

// Share
// Implement strStr().

// Return the index of the first occurrence of needle in haystack, or -1 if needle is not part of haystack.

// Clarification:

// What should we return when needle is an empty string? This is a great question to ask during an interview.

// For the purpose of this problem, we will return 0 when needle is an empty string. This is consistent to C's strstr() and Java's indexOf().

 

// Example 1:

// Input: haystack = "hello", needle = "ll"
// Output: 2
// Example 2:

// Input: haystack = "aaaaa", needle = "bba"
// Output: -1
// Example 3:

// Input: haystack = "", needle = ""
// Output: 0
 

// Constraints:

// 0 <= haystack.length, needle.length <= 5 * 104
// haystack and needle consist of only lower-case English characters.
// Accepted
// 1,145,933
// Submissions
// 3,214,176
// Seen this question in a real interview before?

// Yes

// No

var strStr = function(haystack, needle) {

    if(needle.length === 0){
        return 0;
    }

    for (let i = 0; i < needle.length; i++) {
        if (haystack.includes(needle[i])) {
            return (haystack.indexOf(needle))
        }  
        else{
            return -1;
        }
    }
};
let  haystack = "", needle = "a";
console.log(strStr(haystack, needle))
