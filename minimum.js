function min(a, b) {
  if (a < b) {
    console.log(a);
  } else if (a > b) {
    console.log(b);
  } else if (a === b) {
    console.log("Both values are equal");
  } else {
    console.log("Sorry, didn't get that");
  }
}

min(1, 2);
min(10, 5);
