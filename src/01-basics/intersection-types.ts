// Intersection types allow you to combine multiple types into one. This is useful when you want to create a new type that has all the properties of multiple existing types.

// For example, let's say we have two types, `Person` and `Employee`:
type Person = {
  name: string;
  age: number;
};
type Employee = {
  employeeId: number;
  department: string;
};
// We can create a new type called `EmployeePerson` that combines the properties of both `Person` and `Employee` using an intersection type:
type EmployeePerson = Person & Employee;
// Now, `EmployeePerson` has all the properties of both `Person` and `Employee`:
const employeePerson: EmployeePerson = {
  name: "John Doe",
  age: 30,
    employeeId: 12345,
    department: "Engineering",
};
// In this example, `employeePerson` is of type `EmployeePerson`, which means it has all the properties of both `Person` and `Employee`. This allows us to create a new type that combines the features of multiple existing types, making our code more flexible and reusable.
// Intersection types can also be used with interfaces. For example:
interface A {
  a: string;
}
interface B {
  b: number;
}
type C = A & B;
const c: C = {
  a: "Hello",
  b: 42,
};
// In this case, `C` is an intersection type that combines the properties of interfaces `A` and `B`. The variable `c` must have both properties `a` and `b` to satisfy the type `C`.   

// If both types have a property with the same name, the resulting type will have that property with a type that is the intersection of the two types. For example:
type X = {
  value: string;
};
type Y = {
  value: number;
};
type Z = X & Y;
// The type of `value` in `Z` will be `never`, because there is no type that can be both a string and a number at the same time. Therefore, you cannot create an object of type `Z` that has a valid `value` property.
// let z: Z = {
//   value: "This will cause an error because 'value' cannot be both a string and a number."
// };
// In this case, the variable `z` cannot be assigned a valid value for the `value` property, because it cannot be both a string and a number. This illustrates how intersection types can lead to situations where certain properties become impossible to satisfy if they have conflicting types.