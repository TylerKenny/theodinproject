// Following the tutorial at https://developer.mozilla.org/en-US/docs/Learn/JavaScript/First_steps/Strings

// Declaring a variable, initializing it with a string value and then returning the value.

const string = 'The revolution will not be televised';
console.log(string);

// Testing some bad strings and their output.

//const badString1 = This is a test;
//const badString2 = This is a test;
//const badString3 = This is a test';

const badString = string;
console.log(badString);

// Example of template literal, wrapping JS variables inside ${}
const name = 'Chris';
const greeting = `Hello, ${name}`;
console.log(greeting);

// Joining together two variables - concatenation;

const one = 'Hello, ';
const two = 'how are you?';
const joined = `${one}${two}`;
console.log(joined);

// Following the tutorial at https://www.w3schools.com/js/js_string_methods.asp
//
// Javascript string length

let text = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
let length = text.length;
console.log(length)

// Four methods for extracting string characters
// at(position)
// charAt(position)
// charCodeAt(position)
// property access [] like in arrays
//
//charAt() method

let newtext = 'HELLO WORLD';
let char = newtext.charAt(0);

//charCodeAt() method

let charcode = newtext.charCodeAt(0);
