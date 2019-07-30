// Complete the birthdayCakeCandles function below.
function birthdayCakeCandles(ar) {
  ar.sort((a, b) => {
    return b - a;
  });

  let firstElem = ar.shift();
  let candleCount = 1;

  for (let key in ar) {
    if (ar[key] === firstElem) {
      candleCount++;
    }
  }

  console.log(candleCount);
  return candleCount;
}