const Block = require('./block');

class Blockchain {
 // Initialize Blockchain with genosis block
 constructor() {
 this.chain = [new Block(0, new Date().toUTCString(), 'I am the genosis block', '0')];
 }
}

module.exports = Blockchain;
