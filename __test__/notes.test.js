'use strict';

const Notes = require('../lib/notes.js');
jest.spyOn(global.console, 'log');

describe('NOTE Module', () => {
    it('Nothing is logged to the console if there was no command given', () => {
      const myNote = new Notes({method: 'yes', note: '--a'});
      myNote.execute({method: 'yes', note: '--a'});
      expect(console.log).toHaveBeenCalled();
    });
    it('logs data when execute() is called with valid data', () => {
      const myNote = new Notes();
      myNote.execute({ method: 'add', note: 'text note' });
      expect(console.log).toHaveBeenCalled();
    });
  });