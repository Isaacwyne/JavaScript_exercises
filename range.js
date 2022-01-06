function range(a, b) {
    // declaring an empty array
    let numbers = [];

    //loop through the numbers given to determine; the numbers in between
    for (let i = a; i <= b; i++){
        // appending each number found to the empty array created earlier
        numbers.push(i);
    }
    return numbers;
}

let array = range(1, 10);

function sum(array) {
  if (array == []) {
    return;
  } else {
    for (let i = 0; i <= array.length; i++) {
      console.log(i);
    }
  }
}
