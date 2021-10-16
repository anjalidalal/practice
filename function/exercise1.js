
let arr = [2, 4, 6, 7, 8];
function square(){
    let newArr = [];
    let sqr;
    for (let i = 0; i < arr.length; i++) {
        sqr = arr[i] **2;
        newArr.push(sqr);
    }
    console.log(newArr)
}    
square();