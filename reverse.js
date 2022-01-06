function reverseArray(array) {
  let reversed = [];
  for (let i of array) {
    reversed.unshift(i);
  }
  return reversed;
}

console.log(reverseArray([1, 2, 3, 4]));
