const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
 function deleteDigit(n) {

  function srt(a,b) {
    return b - a 
  }

  let arr =[];

  n = n.toString()
    for (let i=0; i<n.length; i++) {
    arr[i] = '';

      for (let j=0; j<n.length; j++) {
        if (i != j) {arr[i] += n[j]}
      }

    arr[i] =Number(arr[i]);
  }

  arr.sort(srt);
return arr[0]
}


module.exports = {
  deleteDigit
};
