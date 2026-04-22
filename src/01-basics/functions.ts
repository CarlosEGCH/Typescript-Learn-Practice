// Type expressions allow you to define the shape of a function, including its parameters and return type.

function greeter(fn: (name: string) => void) {
    fn("Hello, TypeScript!");
}

function printToConsole(s: string) {
    console.log("Function says: " + s);
}

greeter(printToConsole); // Output: "Hello, TypeScript!"

// You can also use type aliases to define function types for better readability.

type GreetFunction = (name: string) => void;

function greeter2(fn: GreetFunction) {
    fn("Hello, TypeScript with type alias!");
}

greeter2(printToConsole); // Output: "Hello, TypeScript with type alias!"

// You can also define functions with optional parameters and default values.

function greet(name: string, greeting: string = "Hello") {
    console.log(`${greeting}, ${name}!`);
}
greet("Alice"); // Output: "Hello, Alice!"
greet("Bob", "Hi"); // Output: "Hi, Bob!"

function greetOptional(name: string, greeting?: string) {
    if (greeting) {
        console.log(`${greeting}, ${name}!`);
    } else {
        console.log(`Hello, ${name}!`);
    }
}
greetOptional("Charlie"); // Output: "Hello, Charlie!"
greetOptional("Dave", "Welcome"); // Output: "Welcome, Dave!"


// Call signatures allow you to define the type of a function that can be called with specific parameters and return a specific type.

type StringFormatter = {
    description: string;
    (input: string): string; // Call signature
    lowerCase: (input: string) => string; // Not exactly a call signature, but an additional method on the function type
}

const upperCaseFormatter: StringFormatter = (input) => input.toUpperCase();
upperCaseFormatter.lowerCase = (input) => input.toLowerCase();
upperCaseFormatter.description = "Converts a string to uppercase.";

console.log(upperCaseFormatter("hello")); // Output: "HELLO"
console.log(upperCaseFormatter.lowerCase("WORLD")); // Output: "world"


// Rest parameters allow you to define a function that accepts an arbitrary number of arguments of a specific type.

function sum(...numbers: number[]): number {
    return numbers.reduce((total, num) => total + num, 0);
}

console.log(sum(1, 2, 3)); // Output: 6

// Rest arguments can also be used in combination with other parameters.

const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];

arr1.push(...arr2); // Using spread operator to push all elements of arr2 into arr1
console.log(arr1); // Output: [1, 2, 3, 4, 5, 6]


// Return type annotations allow you to specify the type of value a function will return.

function multiply(a: number, b: number): number {
    return a * b;
}
console.log(multiply(4, 5)); // Output: 20

// If a function does not return a value, you can use the void return type.
function logMessage(message: string): void {
    console.log("Log: " + message);
}
logMessage("This is a log message."); // Output: "Log: This is a log message."

// Sometimes you may want to specify that a function never returns, such as when it always throws an error or has an infinite loop. In that case, you can use the never return type.
function throwError(message: string): never {
    throw new Error(message);
}


// The "This" type refers to the type of the current object in a method or function. It allows you to create methods that return the same type as the object they belong to, enabling method chaining.
class Calculator {
    private value: number;
    constructor(initialValue: number = 0) {
        this.value = initialValue;
    }
    add(n: number): this {
        this.value += n;
        return this; // Returning 'this' allows for method chaining
    }
    subtract(n: number): this {
        this.value -= n;
        return this; // Returning 'this' allows for method chaining
    }
    getResult(): number {
        return this.value;
    }
}
const calc = new Calculator();
const result = calc.add(5).subtract(2).getResult(); // Method chaining
console.log(result); // Output: 3

// To prevent misuse of the "this" type, you can use the "noImplicitThis" compiler option, which will raise an error if "this" is used in a way that could lead to an undefined or incorrect type.
function logLabel(this: Calculator) :void {
    console.log("Current value: " + this.getResult());
}
logLabel.call(calc); // Output: "Current value: 3"


// Function overloads allow you to define multiple function signatures for a single function implementation, enabling different ways to call the function with varying parameters and return types.

function combine(a: number, b: number): number;
function combine(a: string, b: string): string;
function combine(a: any, b: any): any {
    if (typeof a === "number" && typeof b === "number") {
        return a + b; // Combine numbers by adding
    }
    if (typeof a === "string" && typeof b === "string") {
        return a + b; // Combine strings by concatenation
    }
    throw new Error("Incompatible types");
}
console.log(combine(6, 8)); // Output: 14
console.log(combine("Hello, ", "world!")); // Output: "Hello, world!"


// Generic functions allow you to create functions that can work with any type, while still maintaining type safety. You can use type parameters to define the types that the function will operate on.

function identity<T>(arg: T): T {
    return arg;
}
console.log(identity(42)); // Output: 42
console.log(identity("TypeScript")); // Output: "TypeScript"
function reverseArray<T>(items: T[]): T[] {
    return items.reverse();
}
console.log(reverseArray([1, 2, 3])); // Output: [3, 2, 1]
console.log(reverseArray(["a", "b", "c"])); // Output: ["c", "b", "a"]