// Complete the plusMinus function below.
function plusMinus(arr) {
  let plV = 0;
  let mnV = 0;
  let zrV = 0;
  let n = arr.length;

  for (let key in arr) {
    if (arr[key] >= 0) {
      if (arr[key] === 0) {
        zrV++;
      } else {
        plV++;
      }
    } else {
      mnV++;
    }
  }

  console.log((plV / n).toFixed(6));
  console.log((mnV / n).toFixed(6));
  console.log((zrV / n).toFixed(6));
}