// Complete the miniMaxSum function below.
function miniMaxSum(arr) {

  arr.sort((a, b) => {
    return a - b;
  });
  let tempArr = arr.slice();

  console.log((arr.reduce((a, b) => a + b, 0) - tempArr.pop()) + ' ' +
      (arr.reduce((a, b) => a + b, 0) - arr.shift()));
}