'use strict';

const minimist = require('minimist');

function Input() {
//   console.log("process.argv : ", process.argv);
  
  // Get the -x style of arguments from the user
  const args = minimist(process.argv.slice(2));
  console.log(" args minimist >>>>> ", args)
  // Use the args to create our properties with helper methods
  this.getMethod(args);  
}

Input.prototype.getMethod = function (args) {
  let commentValdition = /add\|a\b/g;
  let argString = Object.keys(args).join('').slice(1);
  let addFlag = commentValdition.exec(argString);
  this.action = addFlag ? 'add' : null;
  if (!(typeof args[addFlag] === 'string')){
      this.payload = null;
  } else {
      this.payload = args[addFlag];
  }
};



module.exports = Input;