const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an email address, return it's domain.
 *
 * @param {String} email
 * @return {String}
 *
 * @example
 * For the input 'prettyandsimple@example.com', the output should be 'example.com'
 *
 */
 function getEmailDomain(email) {

  let str = '';
  let isTrue = 0

  for (let i=0; i< email.length; i++) {
    if (isTrue == 1) { str+= email[i]}
    if (email[i] == '@') { 
      str = ''
      isTrue = 1
    }
  }
  return str
}

module.exports = {
  getEmailDomain
};
