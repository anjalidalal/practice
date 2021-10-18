//need firsy character of arr str each element

let arr = ["Masai", "School"];

function characterFirst(){
    let newArr = [];
    for (let i = 0; i < arr.length; i++) {
        newArr.push(arr[i][0]);
    }
    console.log(newArr);
}

characterFirst();
