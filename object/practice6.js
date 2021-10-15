
let arr = ['a', 'b', 'c', 'a', 'd', 'c', 'e'];
let unique = [];

for (let i = 0; i < arr.length; i++) {
    let exists = false;
    for (let j = 0; j < unique.length; j++) {
    if (arr[i] === unique[j]) {
        exists = true;
        break;
    }
    }
    if (!exists) {
        unique.push(arr[i]);
    }
}
console.log(unique);