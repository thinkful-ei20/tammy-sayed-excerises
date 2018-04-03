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

max(myArray);
min(myArray);