'use strict';

const NotesCollection = require('./notes-schema');


class NoteDb {
    async add(data) {
        let record = new NotesCollection(data);
        let saved = await record.save();
        return saved;

    }


    async get(_id) {
        if (_id) {
          let select = await NotesCollection.findOne({ _id });
          return select
        } else {
          let select = await NotesCollection.find();
          return select
        }
      }


    async delete(_id) {
        return await NotesCollection.findByIdAndDelete(_id);
    }

    async update(_id, record) {
        return await NotesCollection.findByIdAndUpdate( _id, record);
      }

    list(record) {
        if (record.catagory) {
            return NotesCollection.find({ catagory: record.catagory });
        } else {
            return NotesCollection.find({});
        }
    }
};


module.exports = NoteDb;