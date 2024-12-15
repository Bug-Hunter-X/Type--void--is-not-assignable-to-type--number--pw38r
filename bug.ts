function printNumbers(n: number): void {
  for (let i = 1; i <= n; i++) {
    console.log(i);
  }
}

printNumbers(5); // Works fine

// The following will produce an error
function printNumbers2(n: number): void {
  for (let i = 1; i <= n; i++) {
    console.log(i);
    if (i === 3) {
      return;
    }
  }
}
printNumbers2(5); // Error: Type 'void' is not assignable to type 'number'