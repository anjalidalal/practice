let arr = ['Masai', 'School'];

function hypen() {
    let newArr = [];
for (let i = 0; i < arr.length; i++) {
    newArr.push(arr[0] + '-' + arr[1]);
    break;
}
console.log(newArr);
}

hypen();