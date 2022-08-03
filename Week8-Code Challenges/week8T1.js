/**
 * Write a function that converts from binary system to the decimal system.
 * the function takes a binary number as string and return the number in decimal system (Number type)
 *
  
 */
function binaryToDecimal(binaryString) {
  let decimal = +0;
  let bits = +1;
  for (let i = 0; i < binaryString.length; i++) {
    let currNum = +binaryString[binaryString.length - i - 1];
    if (currNum === 1) {
      decimal += bits;
    }
    bits *= 2;
  }
  return decimal;
}
