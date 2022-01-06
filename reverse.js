function reverseArray(array) {
  let reversed = [];
  for (let i of array) {
    reversed.unshift(i);
  }
  return reversed;
}

function reverseArrayInPlace(array) {
  let reverse = array.split("");
  return reverse;
}

console.log(reverseArray([1, 2, 3, 4]));
console.log(reverseArrayInPlace([1, 2, 3, 4]));
