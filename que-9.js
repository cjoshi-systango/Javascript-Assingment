let n = 5;
let pattern = "";
for (let i = 1; i <= n; i++) {
  for (let j = 1; j <= n - i; j++) {
    pattern += " ";
  }
  for (let k = 0; k < 2 * i - 1; k++) {
    pattern += "*";
  }
  pattern += "\n";
}
console.log(pattern);