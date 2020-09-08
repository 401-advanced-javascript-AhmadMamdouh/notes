'use stric';

const minimist = require('minimist');

function Input () {
    const args = minimist(process.argv.slice(2));
    this.getCommand(args);
}

Input.prototype.getCommand = function(args){
    let addPatt = /add\b|a\b/g;
    let argstring = Object.keys(args).join('').slice(1);
    let addFlage = addPatt.exec(argstring);
    this.action = addFlage ? 'add' : null;
    if (!(typeof args[addFlage] ==='string')){
        this.payload = null;
    }else{
        this.payload = args[addFlage];
    }
}

module.exports = Input;