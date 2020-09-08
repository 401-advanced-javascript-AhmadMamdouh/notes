#!/usr/bin/env node

// to do http requests like httpie, postman and so on.

// ./index.js -m POST -u http://localhost:3000

'use strict';

const Input = require('./lib/input.js');
const Notes = require('./lib/notes.js');

const options = new Input();

const notes = new Notes();

options.IsValid() ? notes.execute(options) : catchError();

function catchError(){
    console.log(`
    use: -add or -a <your note>
    -add or -a adding new note
    `);
}

Notes.execute(options);