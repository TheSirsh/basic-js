const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement chainMaker object according to task description
 * 
 */
const chainMaker = {

  chain: [],
  
  getLength() {
    return this.chain.length
  },

  addLink(value) {
    if (value == null) { value = 'null'}
    this.chain.push(value.toString())
    return this
  },

  removeLink(position) {
    for (let i=1; i<this.chain.length+1; i++) {
      if (position == i) {
        this.chain.splice(i-1,1)
        return this
      } else if (i == this.chain.length){
        this.chain = []
        throw Error('You can\'t remove incorrect link!')
      }
    }
  },

  reverseChain() {
    this.chain = this.chain.reverse()
    return this
  },

  finishChain() {
    let str = ''
    for (let i=0; i<this.chain.length; i++) {
      str += '( ' + this.chain[i] + ' )'
      if (i < this.chain.length - 1) {
        str += '~~'
      }
    }
    this.chain = []
    return str
  }
};

module.exports = {
  chainMaker
};
