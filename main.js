'use strict';

const max = function (numbers) {
  let maxNumber = numbers[0];
  let counter = 0; 
  const countTo = numbers.length;
  while (counter < countTo) { 
    if (numbers[counter] > maxNumber) { 
      maxNumber = numbers[counter];
    }
    counter++; }
  console.log(maxNumber);
};

const min = function (numbers) {
  let minNumber = numbers[0];
  let counter = 0; 
  const countTo = numbers.length;
  while (counter < countTo) { 
    if (numbers[counter] < minNumber) { 
      minNumber = numbers[counter];
    }
    counter++; }
  console.log(minNumber);
};

const myArray = [2,5,1,54,12];

// max(myArray);
// min(myArray);

let numbersArray = [1, 5, 6, 4, 3];

function findAverage(array) {
  let sum = 0;
  let length = array.length;
  array.forEach(num => (sum += num));
  let average = sum / length;
  console.log(average);
}

// findAverage(numbersArray);

function repeat(fn, n) {
  let i = 0;
  while (i < n) {
    fn();
    i++;
  }
}

function hello() {
  console.log('Hello world');
}

function goodbye() {
  console.log('Goodbye world');
}

// repeat(hello, 5);
// repeat(goodbye, 5);

// DO NOT EDIT BETWEEN THESE LINES ----->
// Return only names that begin with 'R'
const myNames = ['Rich', 'Joe', 'Bhaumik', 'Ray'];

const filteredNames = filter(myNames, function(name) {
  // This is a "predicate function" - it's a function that only returns a boolean
  return name[0] === 'R';
});

// console.log(filteredNames); // => ['Rich', 'Ray']
// <---- DO NOT EDIT BETWEEN THESE LINES

// TASK: DEFINE YOUR FILTER FUNCTION BELOW:
function filter(arr, fn) {
  let newArray = [];
  for (let i = 0; i < arr.length; i++) {
    if (fn(arr[i]) === true) {
      newArray.push(arr[i]);
    }
  } return newArray;
}

function hazardWarningCreator(typeOfWarning) {
  let warningCounter = 0;
  return function(location) {
    warningCounter += 1;
    console.log(`DANGER! There is a ${typeOfWarning} hazard at ${location}!`);
    if (warningCounter === 1) {
      console.log(`The ${typeOfWarning} hazard alert has triggered ${warningCounter} time today!`);
    } else if (warningCounter === 0 || warningCounter >= 2) {
      console.log(`The ${typeOfWarning} hazard alert has triggered ${warningCounter} times today!`);
    }
  }; 
}

const rocksWarning = hazardWarningCreator('Rocks on the Road');
const floodWarning = hazardWarningCreator('Heavy flood');
const tornadoWarning = hazardWarningCreator('Tornado incoming');
// rocksWarning('Main St and Pacific Ave');

// rocksWarning('Centinela Ave and Olympic Blvd');