/**
 * Given a sorted array, find the index of an element
 * using a binary search algorithm.
 *
 * Example usage:
 *
 * var index = binarySearch([1, 2, 3, 4, 5], 4);
 * console.log(index); // 3
 * var index = binarySearch([1, 2, 3, 4, 5], 8);
 * console.log(index); // null

 */

const binarySearchArray = function (array, target) {
  let sub = function (low, high) {
    // If we are done, we haven't found the target.
    if (high === low) {
      return null;
    }

    // Find the middle point.
    let mid = Math.floor((high - low) / 2) + low;

    // See if we found the target.
    if (array[mid] === target) {
      return mid;

      // Second check to see if we haven't found the target.
    } else if (low === high - 1) {
      return null;

      // If not, decide which half to recurse on.
    } else if (array[mid] > target) {
      return sub(low, mid);
    } else {
      return sub(mid, high);
    }
  };

  // Do the recursion.
  return sub(0, array.length);
};
