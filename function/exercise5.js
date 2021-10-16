let arr = [2, 1, 3, 11, 5, 7];

function oddSum() {
  let sum = 0;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 !== 0) {
      sum += arr[i];
    }
  }
  console.log(sum);
}

oddSum();