const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
 function encodeLine(str) {

  let count = 1
  let symb = str[0]
  let res = ''

  for (let i=1; i<str.length; i++){
    if (i < str.length-1)  {

      if (str[i] ==str[i-1]) {
        count++
      } else if (str[i] != str[i-1]) {
        if (count == 1) {
          res = res + symb 
        } else if (count > 1) {
          res = res + count + symb 
        }
        count = 1;
        symb = str[i]
      }
    } else if (i == str.length-1) {
      if (str[i] == str[i-1]) {
        count++
        return res + count + symb  
      } else if (str[i] != str[i-1]){
        if (count == 1) {
          res = res + symb 
        } else if (count > 1) {
          res = res + count + symb  
        }
        symb = str[i]
        return res + symb
      }
    }
  } 
  return res
}

module.exports = {
  encodeLine
};
