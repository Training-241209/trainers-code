# Advanced_TS_Team4
# Decorators in TypeScript

Decorators in TypeScript are a powerful feature that allows you to add behavior to classes, methods, properties, and parameters. They can be used for logging, validation, or adding metadata, among many other things.

## Types of Decorators:

- **Class Decorators**: Modify or add behavior to a class.
- **Method Decorators**: Modify methods and their behavior.
- **Property Decorators**: Modify or observe class properties.
- **Parameter Decorators**: Modify parameters.
- **Accessor Decorators**: Modify getter and setter behavior.

## Pros of Decorators:

- **Separation of Concerns**: Isolates cross-cutting logic (e.g., logging, validation) from core business logic.
- **Reusability**: A single decorator can be reused across different methods or classes.
- **Cleaner Code**: Reduces boilerplate code by abstracting common behavior into decorators.
- **Improved Readability**: Makes intentions clear, such as `@log` for logging or `@cache` for caching.
- **Extensibility**: Easily add new functionality without modifying existing code.
- **Meta-programming**: Allows dynamic behavior changes at runtime (e.g., with frameworks). (SpringBoot is a good example)

## Cons of Decorators:

- **Complexity**: Overusing decorators can make code harder to understand.
- **Debugging Difficulty**: Debugging can be trickier as decorators introduce additional layers of abstraction.
- **Hidden Logic**: Decorators can hide behavior, making it harder to track where certain actions are happening.
- **Performance Overhead**: Can introduce slight performance costs due to reflection or runtime modifications.
- **Limited Support**: Some environments may not natively support decorators (e.g., older versions of TypeScript).

---

## Example Code:

### Class Decorators

The `logClass` class decorator logs a message to the console whenever the class is created.

```typescript
function logClass(target: Function) {
    console.log(`Class ${target.name} has been created`);
}

// Apply the decorator to a class
@logClass
class MyClass {
    greet() {
        return "Endry!";
    }
}

// Create an instance of the class
const obj = new MyClass();
console.log(obj.greet());  // Output: Endry!

```

### Method Decorator

The `log` method decorator logs the method name, its arguments, and the return value whenever the decorated method is called.

```typescript
function log(target: any, propertyKey: string, descriptor: PropertyDescriptor) {
  const originalMethod = descriptor.value;
  
  // Replace the method with a new function that logs input/output
  descriptor.value = function(...args: any[]) {
    console.log(`Method ${propertyKey} called with arguments:`, args);
    const result = originalMethod.apply(this, args);
    console.log(`Method ${propertyKey} returned:`, result);
    return result;
  };
}

class Greeter {
  greeting: string;
  
  constructor(message: string) {
    this.greeting = message;
  }

  // Apply the log decorator to this method
  @log
  greet(name: string) {
    return `Hello, ${this.greeting} ${name}`;
  }
}

const greeter = new Greeter("World");
greeter.greet("Alice");  // This will trigger the decorator and log the method call

```

### Accessor Decorator

The `configurable` decorator prevents modification of getter and setter behavior after they have been set.

```typescript
class Point {
  private _x: number;
  private _y: number;
  
  constructor(x: number, y: number) {
    this._x = x;
    this._y = y;
  }

  @configurable(false)
  get x() {
    return this._x;
  }

  @configurable(false)
  get y() {
    return this._y;
  }
}

function configurable(value: boolean) {
  return function (target: any, propertyKey: string, descriptor: PropertyDescriptor) {
    descriptor.configurable = value;
  };
}

```
### Property Decorator

The `logProperty` decorator logs when a property is defined.

```typescript
function logProperty(target: any, propertyKey: string) {
  console.log(`Property ${propertyKey} has been defined`);
}

class MyClass1 {
  @logProperty
  name: string;

  constructor(name: string) {
    this.name = name;
  }
}

const obj1 = new MyClass1("Alice");  // Logs the property definition

```

### Parameter Decorator

The `trackParameter` decorator logs when a method parameter is used.

```typescript
function trackParameter(target: any, methodName: string, parameterIndex: number) {
  console.log(`Parameter at index ${parameterIndex} in method ${methodName} is tracked`);
}

class MyClass3 {
  sayHi(@trackParameter userName: string) {
    return `Hello, ${userName}!`;
  }
}

const instance = new MyClass3();
instance.sayHi("Bob");

```


# Functions in TypeScript
> Functions in Typescript serve the same purpuse as funtions in any programing languges. Functions serve as reusable blocks of code designed to perform specific tasks. They take input, process it, and produce output.

## Core Concepts

>### Function Type Expresions
> Function type expressions allow you to define the type of a function in TypeScript. This is useful for specifying the types of parameters and the return type of a function.
>
>```Typescript
>function greeter(fn: (a: string) => void) {
>  fn("Hello, World");
>}
>
>function printToConsole(s: string) {
>  console.log(s);
>}
>
>greeter(printToConsole);
>```
>The syntax (a: string) => void means “a function with one parameter, named a, of type string, that doesn’t have a return value”. Just like with function declarations, if a parameter type isn’t specified, it’s implicitly any.

>### Call Signatures
>If we want to describe something callable with properties, we can write a call signature in an object type:
>```Typescript
>type DescribableFunction = {
>  description: string;
>  (someArg: number): boolean;
>};
>function doSomething(fn: DescribableFunction) {
>  console.log(fn.description + " returned " + fn
>(6));
>}
>
>function myFunc(someArg: number) {
>  return someArg > 3;
>}
>myFunc.description = "default description";
>
>doSomething(myFunc);
>```
>syntax is slightly different compared to a function type expression - uses `:` between the parameter list and the return type rather than `=>`.
>### Construct Signatures
>JavaScript functions can also be invoked with the `new` operator. TypeScript refers to these as *constructors* because they usually create a new object..In TypeScript you can write a construct signature by adding the `new` keyword in front of a call signature.
>```Typescript
>type SomeConstructor = {
>  new (s: string): SomeObject;
>};
>function fn(ctor: SomeConstructor) {
>  return new ctor("hello");
>}
>```
>### Generic Functions
>*Generics* are used when you want to describe a correspondence between two values. To do this you need to declare a type parameter in the function signature.
>```Typescript
> // no generic typing
>function firstElement(arr: any[]) {
>  return arr[0];
>}
>
>// With generics
>function firstElement<Type>(arr: Type[]): Type | undefined {
>  return arr[0];
>}
>```
>By adding a type parameter Type to this function and using it in two places, we’ve created a link between the input of the function `the array` and the output `return value`. Now when we call it, a more specific type comes out.


# as const

## What is as const?
`as const` is a type assertion that tells TypeScript that a variable or expression should be treated as a literal value. 

## Basic Syntax
```typescript
const myValue = "hello" as const;
```

## Key Features
1. **Literal Types:** Ensures that values retain their literal types, making them immutable.
   ```typescript
   const myNumber = 10 as const; // myNumber is of type 10 (not number)
   ```

2. **Readonly Properties:** Arrays and objects become readonly when used with `as const`.
   ```typescript
   const myArray = [1, 2, 3] as const; // readonly [1, 2, 3]
   const myObject = { key: "value" } as const; // { readonly key: "value" }
   ```

3. **Improved Type Safety:** Prevents unintended modifications and ensures stricter type checking.

## Use Cases
- Defining constants in configurations.
- Enforcing immutability in data structures.
- Working with discriminated unions and enums.

## Example
```typescript
const STATUS = {
  SUCCESS: "success",
  FAILURE: "failure",
} as const;

type Status = typeof STATUS[keyof typeof STATUS];

function handleStatus(status: Status) {
  if (status === STATUS.SUCCESS) {
    console.log("Operation was successful");
  } else {
    console.log("Operation failed");
  }
}

handleStatus(STATUS.SUCCESS); // Valid
handleStatus("unknown"); // Error
```

`as const` enhances TypeScript by locking down values and improving type safety, making it an essential tool for developers aiming for robust, maintainable code.


This is useful when you want to ensure that a variable or expression is not modified after it has been assigned a value.


# TypeScript Type Guards

## What are Type Guards?
Type Guards are a form of Narrowing used to check what type a veriable is. It is used to prevent errors that might occur if an incorrect type is fed into a process.

## Why Type Guards?
Type Guards allow you to use multiple different types in a single block of code, or to ensure that unions are preformed correctly.

## Example of Type Guards
The following code is an example of a Type Guard in action.

    function isNumber(value: number | string): value is number {

     return typeof value === "number";

    }

    function processValue(value: number | string) {

     if (isNumber(value)) {


        console.log("Value is a number:", value);


     } else{}
    }
Here, we insure that the input is indeed a number before we do any computations. If it is anything else, we ignore it.


## Interface Vs Types Main differences

You should use types by default until you need a specific feature of interfaces, like 'extends'.

> Interfaces can't express unions, mapped types, or conditional types. Type aliases can express any type.

> Interfaces can use extends, types can't.

> When you're working with objects that inherit from each other, use interfaces. extends makes TypeScript's type checker run slightly faster than using &.

> Interfaces with the same name in the same scope merge their declarations, leading to unexpected bugs.

> Type aliases have an implicit index signature of Record<PropertyKey, unknown>, which comes up occasionally.

Interfaces Can Declaration Merge
Interfaces have another feature which, if you're not prepared for it, can seem very surprising.
When two interfaces with the same name are declared in the same scope, they merge their declarations.
```
interface User {
  name: string;
}
interface User {
  id: string;
}
const user: User = {
Property 'name' is missing in type '{ id: string; }' but required in type 'User'.
  id: "123",
};
```
If you were to try this with types, it wouldn't work:
```
type User = {
Duplicate identifier 'User'.
  name: string;
};
type User = {
Duplicate identifier 'User'.
  id: string;
};
```
## AnotherDifferences Between Type Aliases and Interfaces
Type aliases and interfaces are very similar, and in many cases you can choose between them freely. Almost all features of an interface are available in type, the key distinction is that a type cannot be re-opened to add new properties vs an interface which is always extendable.
# Extending an interface
```
interface Animal {
  name: string;
}

interface Bear extends Animal {
  honey: boolean;
}
const bear = getBear();
bear.name;
bear.honey;
```
# Extending a type via intersections
```
type Animal = {
  name: string;
}
type Bear = Animal & { 
  honey: boolean;
}
const bear = getBear();
bear.name;
bear.honey;
```

### What is Keyof?
The keyof operator is a type operator that takes an object type and produces a string or numeric literal union of its keys aka. the keyof operator creates a new type that is a combination of the key and only the keys within it.
### Why use keyof
Keyof allows users to work with an objext's property names in a type-safe way by making sure only valid keys are used
```example
type Combo = { x: number; y: string };
type C = keyof Combo;
//keyof C` here creates a union type of "x" and "y", no other strings and numbers will not be allowed

type Point = { x: number; y: number };
type P = keyof Point;
//here tyoe P is actually of type x|y which are numbers but can only be of type x or y

```
Keyof can also be used with index signitures to extract the index types
```
type Arrayish = { [n: number]: unknown };
type A = keyof Arrayish;
//type A will be number as the index signiture is number
