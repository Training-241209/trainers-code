console.log("Check it!");

// Javascript Data Types

//Numeric, primitive data type
var myoldSchoolVariable = 56; // var is an old way to declare a variable in JS (before ES6), try to avoid it!

// We have modern ways to declare variables

//String
let myVariable = "Alice"; // we can reassign this variable (it's a global variable as well)

//Boolean
const myContstantVariable = true; // we can't change it

//Undefined
let x; // we did declare it, but did not assign any value


// Object data type, represent collection of keys and value

let person = {

    name: "Vlada",
    age: 20,
    address: "101 Corcoran Street"
};

// Array, can be dynamically changed. 

let fruits = ["apple", "banana", "orange"];


// Type coercion

let sum = "5" + 1; // "51"
let substraction = "5" - 1; // 4 , string was converted to a number


// "==" and "==="

//"===" - Strict equality, if you going to compare "5" and 5, this will give you an false


// Functions

function greet(name){
    //console.log("Hello" + name);

    let localScopeVariable = 57; // this will be the local scope variable
    console.log(`Hello ${name}`); // string interpolation

}

// New syntax from ES6
const myModernGreet = (name) =>{
    console.log("Hello" + name);
}

greet(person.name);


// Block Scope only in ES6 and newer

if(true){
    let blockScopeVariable = 58; // this will be the block scope variable
}
else{
    //Do somethings
}