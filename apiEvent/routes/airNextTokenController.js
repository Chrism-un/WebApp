const express = require("express");
const InputDataDecoder = require('ethereum-input-data-decoder');
const POOL_ADDRESS = ['addressWallet'.toLowerCase(),'addressWallet'.toLowerCase()]
const Web3 = require('web3');
const { abi } = require('../conf/AirnectToken');
const decoder = new InputDataDecoder(abi);
const BigTransfer = require('../models/bigTransfer');

let contractAddress = 'smartcontract address'.toLowerCase();


var wsProvider = new Web3(new Web3.providers.WebsocketProvider(
    "wss://rinkeby.infura.io/ws/v3/<your token>"
  ));
  
let subscription = wsProvider.eth.subscribe('pendingTransactions', async function(error, txHash){
    if (error) console.log(error);
    if(!error) {
          try {
               let tx = await wsProvider.eth.getTransaction(txHash);
               if (tx && tx.from) {// This is the point you might be looking for to filter the address
                   if (POOL_ADDRESS.includes(tx.from.toLowerCase())){
                        console.log(tx)
                           BigTransfer.findOne({ txHash: txHash }, async function(err, foundUser) {
                            if (foundUser){ 
                                    console.log("Hash already present in DB ERROR");
                                    return;
                            } // Verification du user en base 
                            const data = await decoder.decodeData(tx.input);
                            
                            const bigTransfer = new BigTransfer(); /// Création du user
                            bigTransfer.txHash = txHash;
                            bigTransfer.recipient = "0x"+data.inputs[0].toString();
                            bigTransfer.sender = tx.from;
                            bigTransfer.amount = data.inputs[1].toNumber();
                            bigTransfer.save(function(err) {
                                if (err) console.error(err);
                            });
                        });
                   }
               }
           } catch (err) {
               console.error(err);
           }
    }
  
});

// unsubscribes the subscription
subscription.unsubscribe(function(error, success){
    if(success)
        console.log('Successfully unsubscribed!');
});
