let arr = [1, 2, 6, 9, 4, 5];

function cubeSum() {
    let cube = 0;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] % 3 === 0) {
            cube += (arr[i] ** 3);
        }
    }
    console.log(cube);
}


cubeSum();