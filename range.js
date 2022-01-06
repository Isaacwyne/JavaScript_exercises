// declare the range function
function range(a, b, step = 1) {
  // declare an empty array
  let numbers = [];

  // check if the "step" is less than 0
  if (step < 0) {
    for (let negative = a; negative >= b; negative += step) {
      numbers.push(negative);
    }
    return numbers;
  } else {
    for (let positive = a; positive <= b; positive += step) {
      numbers.push(positive);
    }
    return numbers;
  }
}

function sum(array) {
  // declare a variable to keep track of the sum of the numbers
  let result = 0;
  // check if the arrayl is empty and if so => just return
  if (array == []) {
    return;
  } else {
    // loop through the array and on each iteration increment the "result" variable
    for (let item of array) {
      result += item;
    }
    return result;
  }
}

console.log(sum(range(1, 10, 2)));
console.log(sum(range(5, 2, -1)));