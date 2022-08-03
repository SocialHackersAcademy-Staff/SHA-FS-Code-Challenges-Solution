/**
 * Balanced Brackets
 * Given a string, return true if its arrangement of parenthesis (), curly-brackets {}, and square-brackets [] would be considered valid in code and mathematics (is balanced).
 * isBalanced("(x + y) - (4)") // true
 * isBalanced("(((10 ) ()) ((?)(:)))") // true
 * isBalanced("[{()}]") // true
 * isBalanced("(50)(") // false
 * isBalanced("[{]}") // false
 *

*/
//
const isBalanced = function (str) {
  let stack = [];
  let map = {
    "(": ")",
    "[": "]",
    "{": "}",
  };

  for (let i = 0; i < str.length; i++) {
    if (map[str[i]]) {
      stack.push(str[i]);
    } else if (str[i] === ")" || str[i] === "}" || str[i] === "]") {
      if (map[stack.pop()] !== str[i]) {
        return false;
      }
    }
  }
  return stack.length === 0;
};
