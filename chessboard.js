let readline = require("/usr/lib/node_modules/readline-sync");
let size = 0;
do {
  size = readline.question("Enter your preferred height: ");
} while (size <= 0);

for (let yAxis = 0; yAxis < size; yAxis++) {
  let line = "";

  for (let xAxis = 0; xAxis < size; xAxis++) {
    line += (yAxis + xAxis + 1) % 2 ? " " : "#";
  }
  console.log(line);
}
