// Narrowing is the process of refining a type to a more specific one based on certain conditions. TypeScript provides several ways to narrow types, such as type guards, type assertions, and control flow analysis.

// Example of type narrowing using type guards
// In this specific example, we have a function that takes an unknown value and checks if it is a string. If it is, we can safely use string methods on it.
// Notice the use of the 'value is string' syntax in the function signature, which tells TypeScript that if the function returns true, the value can be treated as a string within that scope.
function isString(value: unknown): value is string {
  return typeof value === 'string';
}

// Example usage of the isString type guard
function printLength(value: unknown) {
  if (isString(value)) {
    // Here, TypeScript knows that 'value' is a string, so we can safely call string methods on it.
    console.log(`The length of the string is: ${value.length}`);
  } else {
    console.log('The value is not a string.');
  }
}

printLength('Hello, TypeScript!'); // The length of the string is: 18
printLength(42);
// ==========================
// == Truthiness Narrowing ==
// ==========================

// Truthiness narrowing is a specific type of narrowing that occurs when TypeScript can determine the truthiness of a value. For example, if we check if a value is truthy or falsy, TypeScript can narrow the type accordingly.
function checkTruthy(value: unknown) {
  if (value) {
    // Here, TypeScript knows that 'value' is truthy, so it cannot be null, undefined, false, 0, or an empty string.
    // We can safely use 'value' as a non-nullable type here, like checking if it's a string or an object.
    if (typeof value === 'string') {
      console.log(`The value is a non-empty string: ${value}`);
    } else {
      console.log('The value is truthy but not a string.');
    }
  } else {
    // Here, TypeScript knows that 'value' is falsy, so it can be null, undefined, false, 0, or an empty string.
    console.log('The value is falsy.');
  }
}

// Example usage of the checkTruthy function
checkTruthy('Hello, world!'); // The value is a non-empty string: Hello, world!
checkTruthy(0); // The value is falsy.
checkTruthy(null); // The value is falsy.
checkTruthy(undefined); // The value is falsy.
checkTruthy(false); // The value is falsy.


// ==========================
// == Equality Narrowing ==
// ==========================

// Equality narrowing occurs when we compare a value to a specific literal or another variable. TypeScript can narrow the type based on the outcome of the comparison.
function checkEquality(value: string | number) {
  if (value === 'Hello') {
    // Here, TypeScript knows that 'value' is the string literal 'Hello'.
    console.log('The value is the string "Hello".');
  } else if (value === 42) {
    // Here, TypeScript knows that 'value' is the number literal 42.
    console.log('The value is the number 42.');
  } else {
    // Here, TypeScript knows that 'value' is either a string that is not 'Hello' or a number that is not 42.
    console.log('The value is something else.');
  }
}

// It can also be used to compare two variables, allowing TypeScript to narrow the type based on their relationship.
function compareValues(a: string | number, b: string | boolean) {
  if (a === b) {
    // Here, TypeScript knows that 'a' and 'b' must be of the same type and value, which can only be a string in this case.
    console.log('Both values are the same string:', a);
  } else {
    // Here, TypeScript knows that 'a' and 'b' are not the same, so they can be of different types or values.
    console.log('The values are different.');
  }
}
compareValues('Hello', 'Hello'); // Both values are the same string: Hello
compareValues(42, "42"); // The values are different.