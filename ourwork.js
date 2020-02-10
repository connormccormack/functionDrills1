'use strict'
function createGreeting(name, age) {
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

const greeting = createGreeting('cain', 10);
console.log(greeting);
