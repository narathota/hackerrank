`Calculate and print the sum of the elements in an array, keeping in mind that some of those integers may be quite large.

    Function Description

Complete the aVeryBigSum function in the editor below. It must return the sum of all array elements.

    aVeryBigSum has the following parameter(s):

ar: an array of integers .
    Input Format

The first line of the input consists of an integer .
    The next line contains  space-separated integers contained in the array.

    Output Format

Print the integer sum of the elements in the array.

    Constraints


Sample Input

5
1000000001 1000000002 1000000003 1000000004 1000000005
Output

5000000015
Note:

    The range of the 32-bit integer is .
    When we add several integer values, the resulting sum might exceed the above range. You might need to use long long int in C/C++ or long data type in Java to store such sums`;

function aVeryBigSum(ar) {
  return ar.reduce((a, b) => a + b, 0);
}