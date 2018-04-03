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