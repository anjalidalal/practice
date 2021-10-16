let arr = [1, 8, 3, 7, 6, 5, 2];

function oddNum (){
    let newArr = [];

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] % 2 !== 0) {
            newArr.push(arr[i]);
        }
    }
    console.log(newArr);
}

oddNum();