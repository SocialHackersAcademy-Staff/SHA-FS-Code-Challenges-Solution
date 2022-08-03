// 1-write a function called (midElement) that takes an array as an argument and returns the element that is located in the middle of that array.
function midElement(array) {
  return array[Math.floor(array.length / 2)];
}

///2-write a function called (multipleEvenIndexes) that takes an array of numbers, as an argument and returns an array of numbers, multiplied by two for even indexes.
function multipleEvenIndexes(array) {
  for (let i = 0; i < array.length; i++) {
    if (i % 2 === 0) {
      array[i] = array[i] * 2;
    }
  }
  return array;
}
