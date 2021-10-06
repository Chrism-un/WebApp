const mongoose = require('mongoose');
const bcrypt = require('bcrypt');


const TransactionSchema = new mongoose.Schema({
       blockHash:{type : String},
        blockNumber: {type : Number},
        chainId: {type : String},
        from: {type : String},
        gas: {type : Number},
        gasPrice: {type : Number},
        hash: {type : String},
        input: {type : String},
        maxFeePerGas: {type : Number},
        maxPriorityFeePerGas: {type : Number},
        nonce:{type : Number},
        to: {type : String},
        transactionIndex: {type : Number},
        type: {type : Number},
        value: {type : Number},
});


module.exports = mongoose.model('transaction', TransactionSchema, 'Transaction');