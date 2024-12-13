
## Union Types

The TypeScript union has the ability to combine one or two different types of data (i.e., number, string, float, double, etc). It is the most powerful way to express a variable with multiple types. Use pipe (‘|’) symbol to combine two or more data types to achieve Union type.

### An Example

```typescript
let value: number | string;   
value = 190;   
console.log("Numeric value of the value: "+value);   
value = "Welcome to TypeScript!";   
console.log("String value of the value: "+value);
```

```console
190
Welcome to TypeScript!
```

### Function Parameters with UnionTypes

You can set UnionTypes in function headers to allow multiple types of input parameters.

```typescript
function displayType(example: (string | number)) { 
    if(typeof(example) === "number") 
        console.log('example is a number.') 
    else if(typeof(example) === "string") 
        console.log('example is a string.') 
} 
  
// Output: Code is number.  
displayType(49);  
  
// Output: Code is string. 
displayType("GFG");  
  
// Compiler Error: Argument of type 'true' is not
// assignable to a parameter of type string | number 
displayType(true);
```

### Working with Union Types

In the example below limits is defined to be either a string or a number. If it is given another type it would produce a compiler error.

```typescript
let limits: (string | number); 
limits = 123;   // OK 
limits = "XYZ"; // OK 
limits = true;  // Compiler Error
```

TypeScript will only allow an operation if it is valid for every member of the union. For example, if you have the union string | number, you can’t use methods that are only available on string.

```typescript
function printId(id: number | string) {
  console.log(id.toUpperCase()); //Compiler Error 
```

### Arrays as Union Types

 In union type we can also pass an array. The program declares an array. The array can represent either a numeric collection or a string collection.

```typescript
var arr = [2, 5, 7, 5, 11, 15]; 
console.log("Display the array elements"); 
// Loop to display array elements 
for (var i = 0; i < arr.length; i++) { 
   console.log(arr[i]); 
} 
// Declare another array 
arr = ["Example", "EX1", "EX2", "Examples"]; 
console.log("Display the array elements");   
// Loop to display the array elements 
for (var i = 0; i < arr.length; i++) { 
   console.log(arr[i]); 
} 
```

```console
Display the array elements
2
5
7
5
11
15
Display the array elements
Example
EX1
EX2
Examples
```
