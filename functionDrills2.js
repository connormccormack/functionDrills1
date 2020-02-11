'use strict';
function jediName(firstName, lastName){
  // get first 3 letters of last name
  const last3 = lastName.slice(0,3);
  // get first 2 letters of first name
  const first2 = firstName.slice(0,2);
  // return concatenation of last name 3 and first name 2
  return `${last3}${first2}`;
}

// jediName('abcdef', 'other');

function beyond(num) {
  if (num === Infinity || num === -Infinity){
    console.log('And beyond');
  } else if (num > 0 && num !== Infinity){
    console.log('To infinity');
  } else if (num < 0 && num !== -Infinity) {
    console.log('To negative infinity');
  } else {
    console.log('Staying home');
  }
}

// beyond(0);

function decode(word) {
  console.log(words);
  // decode each word

  // return decoded message

  return text;
}

const message = 'craft block argon meter bells brown croon droop'
const words = text.split(' ');


console.log(decode('craft block argon meter bells brown croon droop'));

const decodedWords = words.map;
