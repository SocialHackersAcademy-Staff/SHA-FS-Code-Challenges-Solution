/**
 * Given a string, capitalize the letters that occupy even indexes and odd indexes separately, and return as shown below. Index 0 will be considered even.
 * For example, capitalize("abcdef") = ['AbCdEf', 'aBcDeF']. See test cases for more examples.
 *              capitalize("azerty") = ['AzErTy','aZeRtY']
 * The input will be a lowercase string with no spaces.
 * Good luck!
 *

 */
function capitalize(str) {
  let result = ["", ""];
  for (let i = 0; i < str.length; i++) {
    if (i % 2 === 0) {
      result[0] += str[i].toUpperCase();
      result[1] += str[i];
    } else {
      result[1] += str[i].toUpperCase();
      result[0] += str[i];
    }
  }
  return result;
}
