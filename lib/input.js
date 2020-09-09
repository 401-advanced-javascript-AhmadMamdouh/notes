#!/usr/bin/env node
'use strict';

const minimist = require('minimist');

function Input() {
    const secArgs ={}
    
    const args = minimist(process.argv.slice(2));
    secArgs['method']= process.argv.slice(2)[0]
    secArgs['note']= process.argv.slice(2)[1]
    console.log(" args minimist >>>>> ", secArgs)
    this.method = this.checkMethod(secArgs.method);
    this.note = this.checknote(secArgs.note);
}
Input.prototype.checkMethod = function (method = ''){
    let validMethods = /--add|-a/i;
    if(validMethods.test(method)){
        return  method 
    }
    else{
        return validMethods.test(method) ? method : 'PLEASE ADD A VALID METHOD'

    }

}
Input.prototype.checknote = function(note = ''){
    if (note){
        return note
    } else {

        return (note)  ? note : 'PLEASE ADD A NOTE1'
    }
}
module.exports = Input;