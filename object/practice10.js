
// 1. both strings shud have same length
// 2. everycharacter shud have same count

function anagram(str1,str2) {

    let anjali = {};
    let mansi = {};

  if (str1.length != str2.length) {
    return false;
  }
                  
  for (let i = 0; i < str1.length; i++) {
    if (anjali[str1[i]]) {
      anjali[str1[i]] = anjali[str1[i]] + 1;
    } else {
      anjali[str1[i]] = 1;
    }

    if (mansi[str2[i]]) {
      mansi[str2[i]] = mansi[str2[i]] + 1;
    } else {
      mansi[str2[i]] = 1;
    }
  }
  //to check if mansi has a same key that anjali has
  //if yes then check if the values are same

  for(let key in anjali){
      
    if(mansi[key]){

        if(mansi[key] == anjali[key]){
            continue;
        }else{
            return false;
        }

        // if(mansi[key] != anjali[key]){
        //     return false;
        // }

    }else{
        return false;
    }
  }

  return true;
  
}

let str1 = "den";
let str2 = "end";

console.log(anagram(str1,str2))

//to check if both objects are same or not

// for(let key in anjali){

// }
