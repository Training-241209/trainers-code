# TypeScript Simple Types
---
## Simple Types are also called primitives

1. Main types :
    - string : used to store text values such as "student"
    - number : used to store whole numbers and floating point numbers 
    - boolean : true or false 
  
2.  Less common primitives used in later versions of Javascript and TypeScript:
    - bigint : stores whole and floating point values, allowing larger positive and neagtive values 
    - symbol : creates a globally unique identifier 
  
### Type Assignment 

1. Explicit : the type is specified 

``` TypeScript
let name : string = "Roland";
```

2. Implicit : TypeScript will infer the type based on the assigned value

``` TypeScript
let name  = "Roland";
```
### Errors

When using implicit assignment, any future attemmpt to assign the same variable a value of a different type, an error will be thrown 

```TypeScript
let name = "Roland"; // inferred to type string
firstName = 20; // attempts to re-assign the value to a different type
```

### Disabling Type checking

TypeScript may not always properly infer what the type of a variable may be. In such cases, it will set the type to any which disables type checking.

```TypeScript
// Implicit any as JSON.parse doesn't know what type of data it returns so it can be "any" thing...
const json = JSON.parse("25");
// Most expect json to be an object, but it can be a string or a number like this example
console.log(typeof json);