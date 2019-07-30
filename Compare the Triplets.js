function compareTriplets(a, b) {
  // if the input parameters are strings
  // let aArr = a.split(' ').map(Number);
  // let bArr = b.split(' ').map(Number);

  let aArr = a;
  let bArr = b;

  let aTot = 0;
  let bTot = 0;

  for (let key in aArr) {
    if (aArr[key] > bArr[key]) {
      aTot++;
    } else {
      if (aArr[key] !== bArr[key]) {
        bTot++;
      }
    }
  }
  return [aTot, bTot];
}