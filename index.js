'use stric';


const mongoose = require('mongoose');

const noteSchema = require('./lib/model/note-schema')
const Input = require('./lib/input.js');
const Notes = require('./lib/notes.js');

const MONGOOSE_URL = 'mongodb://localhost:27017/note';

mongoose.connect(MONGOOSE_URL,{
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false,
});

const options = new Input();
const note = new Notes(options);
options.valid() ? note.execute(options) : help() ;

async function help() {
  console.log(`
  add usage:  --add <note> 
  -a add note
  --add add note
    `);
  await mongoose.disconnect();
}


// const note = new Notes();
// const options = new Input();

// Notes.execute(options);
