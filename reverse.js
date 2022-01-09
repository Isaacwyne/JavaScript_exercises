function reverseArray(array) {
  let reversed = [];
  for (let i of array) {
    reversed.unshift(i);
  }
  return reversed;
}

function reverseArrayInPlace(array) {
  const n = array.length - 1;
  // getting the midpoint within the array
  const midPoint = Math.floor(n / 2);

  for (let i = 0; i < midPoint; i++) {
    // flipping elements here
    // creating a variable to temporarily store the characters
    let temp = array[i];
    array[i] = array[n - i];
    array[n - i] = temp;
  }
  return array;
}

console.log(reverseArray([1, 2, 3, 4]));
console.log(reverseArrayInPlace([1, 2, 3, 4, 5]));
