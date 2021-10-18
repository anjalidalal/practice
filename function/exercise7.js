let arr = ['apple', 'windows', 'java', 'to'];
let length = arr.length;

function checkLength(){
    let newArr = [];
    for (let i = 0; i < arr.length; i++) {
        newArr.push(arr[i].length);
    }
    console.log(newArr)
} 

checkLength();