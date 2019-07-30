/*
 * Complete the timeConversion function below.
 */
function timeConversion(s) {
  /*
   * Write your code here.
   */

  let rtrnStrng;
  if (s.includes('PM')) {
    let temp = s.split('PM')[0].split(':');
    let hour = (parseInt(temp[0]) + 12).toString();
    temp.shift();
    temp.unshift(hour);
    let tempArr = [];
    for (let key in temp) {
      if (parseInt(key) < temp.length - 1) {
        tempArr.push(temp[key] + ':');
      } else {
        tempArr.push(temp[key]);
      }
    }
    rtrnStrng = tempArr.toString().replace(/,/g, '');
  }
  console.log(rtrnStrng);
  return rtrnStrng;
}