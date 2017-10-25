'use strict';

module.exports.hello = (event, context, callback) => {  
  callback(null, `Your hello greetings to ${event.who} started successfully`);

};
