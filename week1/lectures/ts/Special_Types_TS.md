## TypeScript Special Types


|Type|Definition|
|---|---|
|***any***|Variable can be of any type.|
|***unknown***|Variable can be of any type. Must be type checked with 'as'.|
|***never***|Variable cannot be defined.|
|***undefined***|Variable must be set to undefined.|
|***null***|Variable must be set to null (empty object).|

<br>

---

<br>

Anything works with **any**!
```typescript
let variable: any = 42;
variable = "string";
variable = true;
variable = 3.14;
variable.toPrecision(2);

// Everything works fine, do what you want, there's no type checking
```


<br>

---

<br>

**Unknown** requires casting before using functions or using as an assigned value.
```typescript
let variable: unknown = 42.01234;

// Not allowed!
variable.toPrecision(3);

// Works fine, results in 42.01
(variable as Number).toPrecision(4);

// Not allowed!
let newVariable: Number = variable;

// Works fine, assigns the value of 42.01234 to newVariable
let newVariable: Number = variable as Number;

```


<br>

---

<br>


**Never** cannot be defined. Mainly used for conditional checking / better debugging, functions that never return, or functions that throw errors.
```typescript
// Not allowed!
let variable: never = 42;

function loop(): never {
  while (true) {
    // Do infinite things
  }
}
```

```typescript
// Example from TypeScript Handbook: 
// https://www.typescriptlang.org/docs/handbook/2/narrowing.html#the-never-type

type Shape = Circle | Square;
 
function getArea(shape: Shape) {
  switch (shape.kind) {
    case "circle":
      return Math.PI * shape.radius ** 2;
    case "square":
      return shape.sideLength ** 2;
    default:
	
      // Errors - Type 'Triangle' is not assignable to type 'never'.
      const _exhaustiveCheck: never = shape; 
	  
      return _exhaustiveCheck;
  }
}
```

<br>

---

<br>

**Null** and **undefined** are primitive types mainly used for conditionals and for additional specification on what type a variable can be.
```typescript
// Example scenario:
// Undefined - Temperature sensor has not taken a reading yet
// Number - Temperature sensor has taken and recorded a reading
// Null - Temperature sensor is malfunctioning and cannot record

let detectedTemperature: number | null | undefined = undefined;
```
