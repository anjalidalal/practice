let arr = ['two', 'three', 'four'];
let length = arr.length;
function oddSum(){
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i].length % 2 !== 0) {
            sum += arr[i].length;
        }   
        //console.log(arr[i].length % 2)
    }
    console.log(sum)
}

oddSum();