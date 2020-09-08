'use strict';

// Notice: This is not a constructor.
// this demonstrates exporting a POJO (plain old javascript object)
function Notes() {};

Notes.execute = function (options) {
    console.log(options.method);
    switch (options.method) {
        case '--add':
        case '-a':
            if (add(options.Notes)) {
                console.log(`${options.Notes} Added`);
            } else {
                console.log('Please Add A Note1');
            }
            break;
        default: console.log('Please Add A Note3')
    }
};

function add(note) {
    if (note === undefined || note === '') {
        return false
    } else {
        console.log({ id: random(), note: note })
    }
}

function random() {
    return Math.floor((Math.random() * 100))
}

module.exports = Notes;