let arr = [2, 3, 4, 5];

function twice(){
    let newArr = [];
    let double;

    for (let i = 0; i < arr.length; i++) {
        double = arr[i] * 2;
        newArr.push(double);
    }

    console.log(newArr);
}

twice();