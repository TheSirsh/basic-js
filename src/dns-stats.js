const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an array of domains, return the object with the appearances of the DNS.
 *
 * @param {Array} domains
 * @return {Object}
 *
 * @example
 * domains = [
 *  'code.yandex.ru',
 *  'music.yandex.ru',
 *  'yandex.ru'
 * ]
 *
 * The result should be the following:
 * {
 *   '.ru': 3,
 *   '.ru.yandex': 3,
 *   '.ru.yandex.code': 1,
 *   '.ru.yandex.music': 1,
 * }
 *
 */
function getDNSStats(domains ) {

  let obj ={}

  for (let i=0; i< domains.length; i++) {
    let str = ''
    let str2 =''

    for (let j=domains[i].length-1; j>-1; j--){
      if (domains[i][j] != '.') {
        str =   domains[i][j]  +str
      }
      if (domains[i][j] == '.' || j==0) {
        str = str2 + '.' + str
        str2 = str
        str = ''
        if (isNaN(obj[str2])) {obj[str2] = 1}
          else if (!isNaN(obj[str2])) {obj[str2]++}
      }
    }
  }
  return obj
}

module.exports = {
  getDNSStats
};
