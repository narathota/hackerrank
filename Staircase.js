// Complete the staircase function below.
function staircase(n) {
  for (let i = 1; i <= n; i++) {
    let tempArr = [];
    for (let j = 1; j <= n - i; j++) {
      tempArr.push(' ');
    }
    for (let j = 1; j <= i; j++) {
      tempArr.push('#');
    }
    console.log(tempArr.toString().replace(/,/g, ''));
  }
}