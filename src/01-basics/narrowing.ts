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


// ==========================
// == Type assertions ==
// ==========================

// Type assertions allow you to tell TypeScript to treat a value as a specific type, even if it cannot be inferred. This can be useful when you know more about the type of a value than TypeScript does.
function assertString(value: unknown): asserts value is string {
  if (typeof value !== 'string') {
    throw new Error('Value is not a string');
  }
}

// Example usage of the assertString function
function printUpperCase(value: unknown) {
  assertString(value);
  // After the assertion, TypeScript knows that 'value' is a string, so we can safely call string methods on it.
  console.log(value.toUpperCase());
}
printUpperCase('Hello, TypeScript!'); // HELLO, TYPESCRIPT!
//printUpperCase(42); // This will throw an error at runtime because 42 is not a string.


// ==========================
// == Assertion functions ==
// ==========================

// Assertion functions are a special type of function that can be used to assert the type of a value. They are similar to type assertions but are defined as functions that throw an error if the assertion fails.
function assertIsNumber(value: unknown): asserts value is number {
  if (typeof value !== 'number') {
    throw new Error('Value is not a number');
  }
}

// Example usage of the assertIsNumber function
function printDouble(value: unknown) {
  assertIsNumber(value);
  // After the assertion, TypeScript knows that 'value' is a number, so we can safely perform arithmetic operations on it.
  console.log(value * 2);
}
printDouble(21); // 42
//printDouble('Not a number'); // This will throw an error at runtime because the value is not a number.


// =========================
// == Discriminated Unions ==
// =========================

// Discriminated unions are a powerful way to narrow types based on a common property. They allow you to define a union of types that share a common discriminant property, which can be used to narrow the type based on its value.
interface Circle {
  kind: 'circle';
  radius: number;
}

interface Square {
  kind: 'square';
  sideLength: number;
}

type Shape = Circle | Square;

function area(shape: Shape) {
  switch (shape.kind) {
    case 'circle':
      // Here, TypeScript knows that 'shape' is a Circle, so we can safely access the 'radius' property.
      return Math.PI * shape.radius ** 2;
    case 'square':
      // Here, TypeScript knows that 'shape' is a Square, so we can safely access the 'sideLength' property.
      return shape.sideLength ** 2;
    default:
      // This case should never happen because we've covered all possible values of 'kind', but it's good practice to handle it anyway.
      throw new Error('Unknown shape');
  }
}

// Example usage of the area function
const myCircle: Circle = { kind: 'circle', radius: 5 };
const mySquare: Square = { kind: 'square', sideLength: 4 };

console.log(area(myCircle)); // 78.53981633974483
console.log(area(mySquare)); // 16