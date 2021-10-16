let arr = [9, 8, 7, 6, 5];

function numProduct(){
    let product = 1;
    for (let i = 0; i < arr.length; i++) {
        product *= arr[i];
    }
    console.log(product);
}

numProduct();