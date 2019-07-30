function diagonalDifference(arr) {
  // Write your code here

  let prmDgIn = 0;
  let subDgIn = arr.length - 1;

  let prmArr = [];
  let subArr = [];

  for (let key in arr) {
    prmArr.push(arr[key][prmDgIn]);
    prmDgIn++;

    subArr.push(arr[key][subDgIn]);
    subDgIn--;
  }
  let diff = prmArr.reduce((a, b) => a + b, 0) -
      subArr.reduce((a, b) => a + b, 0);
  console.log(Math.abs(diff));
  return Math.abs(diff);
}