let arr = [2, 4, 5, 3, 6 , 8, 10];

function arrayCriteria() {
    let newArr = [];

    for (let i = 0; i < arr.length; i++) {
        if (i % 2 == 0 && arr[i] % 2 == 0) {
            newArr.push(arr[i])
        }
    }
    console.log(newArr);
}

arrayCriteria();