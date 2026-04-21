// ── Primitive Types ──────────────────────────────────────────────────────────
// The three most common primitives in TypeScript are string, number, and boolean.
// Type annotations are written after the variable name with a colon.
let userName: string = "John Doe";
let age: number = 25;
let isStudent: boolean = true;
console.log(userName, age, isStudent);


// ── Interfaces ────────────────────────────────────────────────────────────────
// An interface defines the shape of an object — what properties it has and their types.
// Any object assigned to a variable typed as User must have exactly these properties.
interface User {
    name: string;
    age: number;
    id: number;
    email?: string; // Optional property — may or may not be present
}

const user1: User = {
    name: "Alice Smith",
    age: 28,
    id: 1
};

// Properties can be reassigned as long as the new value matches the declared type.
user1.age = 29;


// ── Arrays ────────────────────────────────────────────────────────────────────
// An array of a specific type is written as Type[] or Array<Type>.
const users: User[] = [
    { name: "Bob Johnson", age: 35, id: 2 },
    { name: "Charlie Brown", age: 22, id: 3 }
];


// ── Optional Chaining ─────────────────────────────────────────────────────────
// When accessing an index of an array, TypeScript can't guarantee the element exists.
// The ?. operator (optional chaining) short-circuits to undefined instead of throwing.
console.log(users[0]?.name); // "Bob Johnson"
console.log(users[1]?.age);  // 22

// Optional chaining also works for optional object properties.
const user2: User = { name: "Eve Adams", age: 27, id: 4 };
console.log(user2.email?.toLowerCase()); // undefined — email was not set


// ── Union Types ───────────────────────────────────────────────────────────────
// A union type allows a variable to hold more than one type.
// TypeScript will enforce that only the allowed types can be assigned.
let id: string | number = 101;
id = "user-101"; // also valid


// ── Literal Types ─────────────────────────────────────────────────────────────
// A literal type restricts a variable to a specific set of exact values.
// Assigning any value outside the set is a compile-time error.
type Direction = "North" | "South" | "East" | "West";
let direction: Direction = "North";
direction = "South"; // valid

type ColorMode = "Light" | "Dark";
let colorMode: ColorMode = "Light";
colorMode = "Dark"; // valid


// ── Type Aliases ──────────────────────────────────────────────────────────────
// A type alias gives a name to any type, including object shapes and function signatures.
// Unlike interfaces, type aliases can also describe primitives, unions, and tuples.
type Point = {
    x: number;
    y: number;
};
const point1: Point = { x: 10, y: 20 };
const point2: Point = { x: 5, y: 15 };

// Type aliases can describe function signatures.
type MathOperation = (a: number, b: number) => number;
const add: MathOperation = (a, b) => a + b;
const subtract: MathOperation = (a, b) => a - b;
console.log(add(5, 3));      // 8
console.log(subtract(5, 3)); // 2


// ── Enums ─────────────────────────────────────────────────────────────────────
// Enums allow you to define a set of named constants, which can be either numeric or string values.
enum Status {
    Active = "ACTIVE",
    Inactive = "INACTIVE",
    Pending = "PENDING"
}

let currentStatus: Status = Status.Active;
console.log(currentStatus); // "ACTIVE" 


// ── Readonly Properties ─────────────────────────────────────────────────────────
// The readonly modifier prevents properties from being reassigned after initialization.
interface Config {
    readonly apiKey: string;
    timeout: number;
}

const config: Config = {
    apiKey: "12345",
    timeout: 5000
};

// config.apiKey = "67890"; // Error: Cannot assign to 'apiKey' because it is a read-only property.
config.timeout = 3000; // Allowed, as timeout is not readonly


// ── Type assertions ───────────────────────────────────────────────────────────────
// Type assertions tell the compiler to treat a value as a specific type, even if it can't infer it.
let someValue: unknown = "This is a string";
let strLength: number = (someValue as string).length;
console.log(strLength); // 16

// These assertions do not perform any runtime checks — they simply override the compiler's type inference. Use them with caution, as incorrect assertions can lead to runtime errors.


// ── Tuples ─────────────────────────────────────────────────────────────────────
// A tuple is a fixed-length array where each element can have a different type.
type UserTuple = [number, string, boolean];
const userTuple: UserTuple = [1, "Alice", true];

// Accessing tuple elements by index
const userId = userTuple[0]; // number
const userNameFromTuple = userTuple[1]; // string
const isActive = userTuple[2]; // boolean
console.log(userId, userNameFromTuple, isActive); // 1 "Alice" true


// ── Conclusion ───────────────────────────────────────────────────────────────
// TypeScript's type system provides powerful tools to ensure type safety and improve code readability. By using interfaces, type aliases, enums, and other type features, you can create robust and maintainable applications. Always strive to leverage TypeScript's capabilities to catch errors early and enhance the developer experience.
