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