function isEven(num) {
  // to avoid all negative numbers
  if (num < 0) {
    return;
  } else if (num === 0) {
    return true; // base case for when the remainder of num is = 0 (num is even)
  } else if (num === 1) {
    return false; // base case for when the remainder of num is = 1 (num is odd)
  } else {
    return isEven(num % 2);
  }
}

console.log(isEven(50));
console.log(isEven(75));
