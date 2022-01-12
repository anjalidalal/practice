let str = "coronavirus";
let vowelsStr = "";
for (let i = 0; i < str.length; i++) {
    if (str[i] == 'a' || str[i] == 'e' || str[i] == 'i' || str[i] == 'o' || str[i] == 'u') {
       vowelsStr += str[i]
    }
}
console.log(vowelsStr);
for (let i = 0; i < str.length; i++) {
    for (let j = i; j < str.length; j++) {
        let newStr = "";
        for (let k = i; k <= j; k++) {
            newStr += str[k];
        }
        // console.log(newStr)
        subStr(vowelsStr, newStr)
    }
}
function subStr(vowelsStr, newStr){
    for (let i = 0; i < newStr.length; i++) {
        let vStr = '';
        for (let j = 0; j < vowelsStr.length; j++) {
           if (newStr[i] == vowelsStr[j]) {
            //    console.log(newStr[i]);
            vStr += newStr[i]
           }
        }
        console.log(vStr)
    }
}