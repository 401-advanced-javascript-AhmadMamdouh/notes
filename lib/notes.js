#!/usr/bin/env node
'use strict';

const NoteSchema = require('./model/note-schema');
const mongoose = require('mongoose');

class Notes {
    execute(options) {
        console.log(options.method);
        switch (options.method) {
            case 'add':
                this.add(options);
                break;
            case 'delete':
                this.delete(options);
                break;
            case 'list':
                this.list(options);
                break;
            default:
                //console.log('you should not reach here at all because of the validation');
                break;
        }

    }
    // async add(note) {
    //     let record = new NoteSchema(note);
    //     let saved = await record.save();
    //     console.log('saved : ', saved);
    //     await mongoose.disconnect();
    //     return saved;
    // }
    async add(note) {
        let saved = await notesSchema.create(note);
        console.log('saved : ', saved);
        await mongoose.disconnect();
        return saved; 
      }

    // async list(note) {
    //     if (typeof(note.category)=='string'){
    //       let allitems = await NoteSchema.find({category: note.category});
    //       console.log('allitems : ', allitems);
    //       await mongoose.disconnect();
    //       return allitems;
    //     }  else {
    //       let allitems = await NoteSchema.find();
    //       console.log('allitems : ', allitems);
    //       await mongoose.disconnect();
    //       return allitems;
    //     }
    // }

    async list(note) {
        let allitems = await notesSchema.get(note);
        console.log('allitems : ', allitems);
        await mongoose.disconnect();
        return allitems;
        
      }

    // async delete(note){
    //     if (note.id){
    //       await NoteSchema.findOneAndRemove({_id:note.id});
    //       console.log('Deleted Note ' + note.id);
    //       await mongoose.disconnect();
    //       // await mongoose.disconnect();
    //     } else {
    //       console.log('No ID was provided,please provide an ID');
    //       await mongoose.disconnect();
    //       // await mongoose.disconnect();
    //     }
    //   }

    async delete(note){
        if(note.id){
          await notesSchema.deleteByGivenId(note);
          console.log('Deleted Note ' + note.id);
          await mongoose.disconnect();
        }else {
          console.log('No ID was provided,please provide an ID');
          await mongoose.disconnect();
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
}
module.exports = Notes;