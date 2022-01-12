let arr = [
    [0, 0, 0, 0], [0, 0, 0, 0], [0, 0, 0, 0], [0, 0, 0, 0]
]
function symmetricArr(newArr, arr) {
    if (newArr === arr) {
        console.log("Yes")
    }
    else {
        console.log("No")
    }

}

function transposeArr(arr) {
    let newArr = [];
    for (let i = 0; i < arr[0].length; i++) {
        let newRow = [];
        for (let j = 0; j < arr[0].length; j++) {
            newRow.push(arr[j][i]);
        }
        newArr.push(newRow);
    }
    console.log(newArr);
    symmetricArr(newArr, arr);
}

transposeArr(arr);