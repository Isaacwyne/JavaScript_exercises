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

console.log(range(1, 10));
