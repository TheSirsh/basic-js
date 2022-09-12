const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create a repeating string based on the given parameters
 *  
 * @param {String} str string to repeat
 * @param {Object} options options object 
 * @return {String} repeating string
 * 
 *
 * @example
 * 
 * repeater('STRING', { repeatTimes: 3, separator: '**', 
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */
 function repeater(str, options) {

  let res = ''
  if (options.separator == undefined) {options.separator = '+' }
  if (options.repeatTimes == undefined) {options.repeatTimes = 1}
  if (options.addition === null) {options.addition = 'null' }
  if (options.addition === undefined) {options.addition = '' }
  if (options.additionRepeatTimes == undefined) {options.additionRepeatTimes = 1 }
  if (options.additionSeparator == undefined) {options.additionSeparator = '|' }

  for (let i=0; i<options.repeatTimes; i++) {
    if (i < options.repeatTimes - 1) {

      res += str

      for (let j=0; j < options.additionRepeatTimes; j++) {
        if (j < options.additionRepeatTimes - 1) {
          res += options.addition + options.additionSeparator
        } else if (j == options.additionRepeatTimes - 1) {
          res += options.addition + options.separator
        }
      }
    }

    if (i==options.repeatTimes - 1) {
      res += str
      for (let j=0; j < options.additionRepeatTimes; j++) {
        if (j < options.additionRepeatTimes - 1) {
          res += options.addition + options.additionSeparator
        } else if (j == options.additionRepeatTimes - 1) {
          res += options.addition
        }
      }
    }
  }
return res



}

module.exports = {
  repeater
};
