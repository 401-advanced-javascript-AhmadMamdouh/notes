'use stric';


const mongoose = require('mongoose');

// const noteSchema = require('./lib/model/note-schema')
const Input = require('./lib/input.js');
const Notes = require('./lib/notes.js');

const MONGOOSE_URL = 'mongodb://localhost:27017/note';

const options = new Input();
const note = new Notes(options);

mongoose.connect(MONGOOSE_URL,{
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false,
});


if ((options.action === 'add') || (options.action === 'a')) {
  options.valid() ? note.save(options).then(mongoose.disconnect): help();
} else if ((options.action === 'list')) {
  options.valid() ? note.list(options).then(mongoose.disconnect): help();
} else if ((options.action === 'delete')) {
  options.valid() ? note.delete(options): help();
}

 function help() {
  console.log(`
  add usage:  --add <note> 
  -a add note
  --add add note
    `);
    process.exit();
}


// const note = new Notes();
// const options = new Input();

// Notes.execute(options);
