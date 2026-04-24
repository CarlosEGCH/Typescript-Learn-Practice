// Null and undefined are two distinct types in TypeScript that represent the absence of a value.

// Null represents the intentional absence of any object value. It is a primitive value that can be assigned to a variable to indicate that it has no value.
let myNull: null = null;

// Undefined represents the absence of a value for a variable that has been declared but not initialized.
let myUndefined: undefined = undefined;

// Handling null and undefined in TypeScript can be done using type guards, optional chaining, and the nullish coalescing operator.

// Type guards can be used to check if a variable is null or undefined before accessing its properties or methods.
function handleNullUndefined(value: string | null | undefined) {
    if (value === null) {
        console.log("Value is null");
    } else if (value === undefined) {
        console.log("Value is undefined");
    } else {
        console.log("Value is a string: " + value);
    }
}

// Optional chaining allows you to safely access properties or methods of an object that may be null or undefined.
interface User {
    name: string;
    age: number;
}

let user: User | null = null;
//console.log(user?.age); // This will throw an error if user is null, but with optional chaining, it will return undefined instead.

// The nullish coalescing operator (??) can be used to provide a default value when a variable is null or undefined.
let defaultValue = "Default Value";
let result : string = myNull ?? defaultValue; // This will return "Default Value" because myNull is null.
console.log(result);


// Null assertion can be used to tell the TypeScript compiler that a value is not null or undefined, even if it cannot be determined at compile time.
let myValue: string | null = "Hello";
let nonNullValue: string = myValue!; // This tells the compiler that myValue is not null, but it can lead to runtime errors if myValue is actually null.
console.log(nonNullValue);


// Arrays bound handling null and undefined
let myArray: (string | null | undefined)[] = ["Hello", null, undefined, "World"];
myArray.forEach(item => {
    if (item === null) {
        console.log("Item is null");
    } else if (item === undefined) {
        console.log("Item is undefined");
    } else {
        console.log("Item is a string: " + item);
    }
});

let array: number[] = [1, 2, 3];
let value = array[0]; // With strictNullChecks enabled, this will be of type number, not number | undefined, because we know that the array has at least one element.
console.log(value);