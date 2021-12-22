function countChars(str, character) {
  // set a counter variable to keep track of the given charater
  let counter = 0;

  // iterate over the "str" variable for its elements
  for (let element of str) {
    if (element === character) {
      counter++;
    }
  }
  console.log(counter);
}

countChars("banana", "a");
