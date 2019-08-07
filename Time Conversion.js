`Given a time in -hour AM/PM format, convert it to military (24-hour) time.

Note: Midnight is 12:00:00AM on a 12-hour clock, and 00:00:00 on a 24-hour clock. Noon is 12:00:00PM on a 12-hour clock, and 12:00:00 on a 24-hour clock.

Function Description

Complete the timeConversion function in the editor below. It should return a new string representing the input time in 24 hour format.

timeConversion has the following parameter(s):

s: a string representing time in  hour format
Input Format

A single string  containing a time in -hour clock format (i.e.:  or ), where  and .

Constraints

All input times are valid
Output Format

Convert and print the given time in -hour format, where .

Sample Input 0

07:05:45PM
Sample Output 0

19:05:45`;
/*
 * Complete the timeConversion function below.
 */
function timeConversion(s) {
  /*
   * Write your code here.
   */
  let rtrnStrng;
  let temp;
  if (s.includes('PM')) {
    temp = s.split('PM')[0].split(':');
    if (parseInt(temp[0]) === 12) {
      rtrnStrng = s.split('PM')[0];
    } else {
      rtrnStrng = s.split('PM')[0].replace(temp[0], (parseInt(temp[0]) + 12).toString());
    }

    // Expanded method
    // hour = (parseInt(temp[0]) + 12).toString();
    // temp.shift();
    // temp.unshift(hour);
    // let tempArr = [];
    // for (let key in temp) {
    //   if (parseInt(key) < temp.length - 1) {
    //     tempArr.push(temp[key] + ':');
    //   } else {
    //     tempArr.push(temp[key]);
    //   }
    // }
    // rtrnStrng = tempArr.toString().replace(/,/g, '');

  } else {
    temp = s.split('AM')[0].split(':');
    if (parseInt(temp[0]) === 12) {
      rtrnStrng = s.split('AM')[0].replace('12', '00');
    } else {
      rtrnStrng = s.split('AM')[0];
    }
  }

  console.log(rtrnStrng);
  return rtrnStrng;
}
