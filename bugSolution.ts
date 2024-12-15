function printNumbers(n: number): void {
  for (let i = 1; i <= n; i++) {
    console.log(i);
    if (i === 3) {
      return; // This is fine now. The function still has a void return type
    }
  }
}

printNumbers(5); // Works as expected