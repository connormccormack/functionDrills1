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
  // decode each word
  let firstLetter = word.charAt(0);
  if (firstLetter === 'a') {
    return word.charAt(1);
  } else if (firstLetter === 'b') {
    return word.charAt(2);
  } else if (firstLetter === 'c') {
    return word.charAt(3);
  } else if (firstLetter === 'd') {
    return word.charAt(4);
  } else {
    return ' ';
  }
}

/*function decoder(sentence) {
  const words = sentence.split(' ');
  words.forEach((word) => {
    console.log(decode(word));
    });
} */


// return decoded message

// const message = 'craft block argon meter bells brown croon droop';
// const words = message.split(' ');


// decoder('craft block argon meter bells brown croon droop');

// const decodedWords = words.map;

function daysInMonth(month, leapYear) {
  switch (month) {
  case 'january':
    console.log('January has 31 days');
    break;
    
  case 'february': 
    if (leapYear === true) {
      console.log('February has 29 days')
    } else {
    console.log('February has 28 days')
    } break;
    
  case 'march':
    console.log('March has 31 days');
    break;
    case 'april':
      console.log('april has 3 days');
      break;
      case 'may':
    console.log('may has 31 days');
    break;
    case 'june':
    console.log('june has 30 days');
    break;
    case 'july':
    console.log('july has 31 days');
    break;
    case 'august':
    console.log('august has 31 days');
    break;
    case 'september':
    console.log('March has 30 days');
    break;
    case 'october':
    console.log('october has 31 days');
    break;
    case 'november':
    console.log('November has 30 days');
    break;
    case 'december':
    console.log('december has 31 days');
    break;
  
  }

}

daysInMonth('december')