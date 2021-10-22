// obj = {
//     l : 0,
//     i : 0,
//     s : 0,
//     t : 1,
//     e : 0,
//     n : 0
// }

// let str1 = "listen";
// let str2 = "siletn";

function anagram(str1, str2){
    let mansi = {}

    if (str1.length !== str2.length) {
        return false;
    }

    for (let i = 0; i < str1.length; i++) {
        if (mansi[str1[i]]) {
            mansi[str1[i]] = mansi[str1[i]] + 1;
        }
        else{
            mansi[str1[i]] = 1;
        }
    }
    
    //str2 check if character present then decrease 

    for (let i = 0; i < str2.length; i++) {
        if (mansi[str2[i]]) {
            mansi[str2[i]] = mansi[str2[i]] - 1;
        }
        else{
            return false;
        }
    }
    
        for (let key in mansi) {
            if (mansi[key] !== 0) {
                return false;
            }
        }
        
        return true;
    
}

let str1 = "listet";
let str2 = "silent";

console.log(anagram(str1, str2));