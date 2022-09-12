const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an array with heights, sort them except if the value is -1.
 *
 * @param {Array} arr
 * @return {Array}
 *
 * @example
 * arr = [-1, 150, 190, 170, -1, -1, 160, 180]
 *
 * The result should be [-1, 150, 160, 170, -1, -1, 180, 190]
 */
 function sortByHeight(arr) {

  let arr2 = []
  let arr3 = []
  let j =0

  for (let i=0; i< arr.length; i++) {
    if (arr[i] != -1) {
      arr2[j] = arr[i]
      j++
    }
  }

  function comp(a,b) {
    return a - b
  }

  arr2.sort(comp);
  j = 0;

  for (let i=0; i< arr.length; i++) {
    if (arr[i] == -1) {
      arr3[i] = arr[i]
    } else if (arr[i] != -1){
        arr3[i] = arr2[j]
        j++
    }
  }
  return arr3
}

module.exports = {
  sortByHeight
};
