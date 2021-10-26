//array string pattern

let arr = ["assignment", "wikipedia", "problem", "media"];
let length = arr.length;
function pattern(){
    let newArr = [];
    let element;
    for (let i = 0; i < arr.length; i++) {
        if (arr[0] === 'a' || arr.length - 1 === 'a') {
            element = arr[i];
        }
        newArr.push(element);
    }
    console.log(newArr);
}

pattern();