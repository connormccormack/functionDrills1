'use strict'
function createGreeting(name, age) {
  if ((name === undefined) || (age === undefined)){
    throw new Error ('please provide both name and age');
  } 
  if ((typeof age !== "number") || (typeof name !== "string")){
    throw new TypeError ('arguments of invalid type');
  }
  const birthYear = yearOfBirth(age);
  return `My name is ${name} and I am ${age} years young.  I was born in ${birthYear}`;
};

function yearOfBirth(age) {
  
  if (age < 0) {
    throw new Error ("age cannot be negative");
  } 
  return 2020 - age;
}

try {
  const greeting2 = createGreeting('john', -60);
} catch(e) {
  console.error(e.message);
}

try {
  const greeting3 = createGreeting('james');
} catch(e) {
  console.error(e.message);
}

try {
  const greeting4 = createGreeting(234, '21');
} catch(e) {
  console.error(e.message);
}

const greeting = createGreeting('cain', 10);
console.log(greeting);
