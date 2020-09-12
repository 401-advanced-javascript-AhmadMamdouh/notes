'use strict';

const NotesCollection = require('./notes-schema');


class NoteDb {
    async add(data) {
        let record = new NotesCollection(data);
        let saved = await record.save();
        return saved;

    }


    async find(data) {
        if (data) {
            let select = await NotesCollection.find({ data });
            return select
        } else {
            let select = await NotesCollection.find();
            return select
        }
    }


    async delete(_id) {
        return await NotesCollection.findByIdAndDelete(_id);
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