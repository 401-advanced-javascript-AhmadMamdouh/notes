'use strict';

// Notice: This is not a constructor.
// this demonstrates exporting a POJO (plain old javascript object)
// function Notes() {};

// Notes.execute = function (options) {
//     console.log(options.method);
//     switch (options.method) {
//         case '--add':
//         case '-a':
//             if (add(options.Notes)) {
//                 console.log(`${options.Notes} Added`);
//             } else {
//                 console.log('Please Add A Note1');
//             }
//             break;
//         default: console.log('Please Add A Note3')
//     }

// };

// function add(note) {
//     if (note === undefined || note === '') {
//         return false
//     } else {
//         console.log({ id: random(), note: note })
//     }
// }

// function random() {
//     return Math.floor((Math.random() * 100))
// }

class Notes {
    constructor() {}
  
    execute(options) {
      switch (options.action) {
      case 'a':
        this.add(options.payload);
        break;
  
      case 'add':
        this.add(options.payload);
        break;
  
      default:
        console.log('Error! please insert a valid flag');
        break;
      }
    }
  
    add(payload) {
      if (payload) {
        let note = {
          ID: 'id',
          content: payload,
        };
        console.log(`Adding Note: ${note.content}`);
      }
    }
  }

module.exports = Notes;