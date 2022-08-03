// 1 - Write a function called (reverseStr) that takes a string as an input and returns the reverse of each letter
//  followed by a number starting from zero(solve it using while loop).
//  example:    reverseStr('hello'); "o0l1l2e3h4"

function reverseStr(str) {
  var res = "";
  var j = 0;
  var i = str.length - 1;
  while (i > -1) {
    res = res + str[i] + j;
    j++;
    i--;
  }
  return res;
}

/**
 * 2 - write a function called (sameLength) that takes array of strings and returns an array of the strings that have the same length
 * example :  ['hi','hello','welcome','hy'] ==> ["hi","hy"]
 */
function sameLength(array) {
  let result = [];
  let contains = {};
  for (let i = 0; i < array.length; i++) {
    for (let j = 0; j < array.length; j++) {
      if (
        array[i].length === array[j].length &&
        !contains[array[i]] &&
        j !== i
      ) {
        result.push(array[i]);
        contains[array[i]] = true;
        break;
      }
    }
  }
  return result;
}
