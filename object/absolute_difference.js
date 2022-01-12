let arr = [1, 2, 3, 5, 7, 12];
let newArr = [];
for (let i = 0; i < arr.length; i++) {
    let diff = 0;
    for (let j = 0; j < arr.length; j++) {
        
            diff = arr[j] - arr[i];
    }
    newArr.push(diff);
}
console.log(newArr)