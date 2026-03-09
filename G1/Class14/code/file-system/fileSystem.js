const txtService = require('./textService');


txtService.write('I want this text to be added in my txt file');


// Calling write() method several times will override the file content each time.
// txtService.write('This is new line added');
// txtService.write('And another line added');

txtService.append('This is new text added.');


console.log('==== This is the file content ====');
setTimeout(function() {
    txtService.read();
}, 2000);