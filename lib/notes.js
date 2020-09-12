#!/usr/bin/env node
'use strict';

// Notice: This is not a constructor.
// this demonstrates exporting a POJO (plain old javascript object)
class Notes {
    execute(options) {
        console.log(options.method);
        switch (options.method) {
            case '--add':
            case '-a':
                if (this.add(options.note)) {
                    console.log(`${options.note} added`);
                } else {
                    console.log('PLEASE ADD A NOTE2');
                }
                break;
            default:
                console.log('PLEASE ADD A NOTE3');

        }

    }
    add(note) {
        if (note === undefined || note === '') {
            return false
        } else {
            console.log({ id: this.random(), note: note });
            return true
        }
    }
    random() {
        return Math.floor((Math.random() * 100))

    }
}

// const Notes = {};

// Notes.execute = function (options) {
//     console.log(options.method);
//     switch (options.method) {
//         case '--add':
//         case '-a':
//             if (add(options.note)) {
//                 console.log(`${options.note} Added`);
//             } else {
//                 console.log('Please Add A Note');
//             }
//             break;
//         default: console.log('Please Add A Note3')
//     }
// };

// function add(note) {
//     if (note === undefined || note === '') {
//         return false
//     } else {
//         console.log({ id: random(), note: note });
//         return true;
//     }
// }

// function random() {
//     return Math.floor((Math.random() * 100))
// }

module.exports = Notes;