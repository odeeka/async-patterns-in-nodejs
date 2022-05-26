// Event-driven code

const EventEmitter = require('events');

let myEventEmitter = new EventEmitter();

// Event: wroteCode
myEventEmitter.on('wroteCode', () => {
  console.log('Somebody wrote some code!')
});

myEventEmitter.on('wroteCode', () =>{
  console.log('Busy building Node apps!')
});

myEventEmitter.emit('wroteCode');

// Result:
// Somebody wrote some code!
// Busy building Node apps!

// with event listener
myEventEmitter.on('wroteCode', (language) => {
  console.log(`Somebody wrote some ${language} code!`)
})

myEventEmitter.emit('wroteCode', 'JavaScript');

myEventEmitter.on('wroteCode', function (language_1, language_2) {
    console.log(`Somebody wrote some ${language_1} and ${language_2} code!`);
  });

myEventEmitter.emit('wroteCode', 'Go', 'NodeJS');