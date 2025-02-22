function foo(a, b) {
  if (a === null || b === null) {
    return null; // Handle null values
  }
  if (typeof a !== 'number' || typeof b !== 'number') {
    return NaN; // Handle non-number inputs
  }
  return a + b; // Perform addition only if both inputs are numbers
}
// Example usage:
console.log(foo(5, 10));   // Output: 15
console.log(foo(5, 'hello')); // Output: NaN
console.log(foo(null, 10)); // Output: null