'use strict';

class Notes {
    constructor() {}
  
    execute(options) {
      switch (options.action) {
      case 'a':
        this.add(options.payload);
        break;
  
      case 'add':
        this.add(options.payload);
        break;
  
      default:
        console.log('Error! please insert a valid flag');
        break;
      }
    }
  
    add(payload) {
      if (payload) {
        let note = {
          ID: 'id',
          content: payload,
        };
        console.log(`Adding Note: ${note.content}`);
      }
    }
  }

module.exports = Notes;