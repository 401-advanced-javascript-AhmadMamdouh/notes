'use stric';

const Input = require('./lib/input.js');
const Notes = require('./lib/notes.js');

const note = new Notes();
const options = new Input();

note.execute(options);