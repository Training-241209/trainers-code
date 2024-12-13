## What is TypeScript?

TypeScript is a language that has all the same features and syntax as Javascript and behaves identically at runtime.
However, it adds a static type checker with the caveat that all types are erased at runtime to preserve the behaviour of javascript.
This is so that it is easy to transition between the languages without worrying about anything breaking.

## Javascript Vs TypeScript

Javascript has a number of strange quirks such as:

- Allowing the referencing of non-existent properties
- Its equality operator coercing operands
- Math.min() is greater than Math.max()
- The expression true + true + true evaluates to 3
- NaN is not equal to NaN
- Many, many more

Typescript will produce compiler errors alerting the author in the scenorios where a behaviour is technically legal within javascript but 
may produce unexpected/unwanted behaviour. 

## TSC (Typescript Compiler)

The Typescript Compiler, or tsc, is the tool responsible for converting Typescript code into JavaScript code, so it can be read by web browsers and Node.js. 

The TypeScript compiler works by removing all TypeScript specific features and converts the TypeScript code into pure JavaScript code. You can specify the details of the conversion using the tsconfig.json file, which will be explained more in depth in the Ts Config Basics section.

The TypeScript Compiler is important because it checks for type safety at compile time, rather than at runtime, which can help developers catch errors early. 

You can find the instructions for installing the TypeScript Compiler and compiling a TypeScript file below. 


## Why and How Should I Use TypeScript?

TypeScript should be used because it is an extension, or superset, of the JavaScript programming language. TypeScript solves many issues that developers ran into when using JavaScript while maintaining compatibility with the JavaScript environment. TypeScript's primary distinguishing feature is type safety and compile-time type checking which helps developers reduce bugs and errors. TypeScript also offers other additional features, such as support for generics and extended support for JavaScript's object-oriented programming through improvements in classes, interfances, and inheritance. 

You can use TypeScript simply by installing the TypeScript compiler. Because TypeScript must be converted, or transpiled, into JavaScript, you must install the TypeScript compiler by using the command

`npm install -g typescript`

After it is installed, you can compile a TypeScript file by running the command:

`tsc file.ts`

which will output a JavaScript file, which would be called file.js in this instance. You can use existing JavaScript files by changing the extension from .js to .ts and make gradual changes to the code over time that utilizes TypeScript's notable features. 

## Target

Sometimes, the author might deploy their code to older environments.
In which case, the target setting allows the author to downlevel JS features to whichever version the author specifies.
The author may also choose to adjust for a higher target setting if they know that their code is fit to run in newer environments.
With target, code can be run in older or newer environments without having to rewrite it manually.4  

## TypeScript Compiler and Installation

The TypeScript Compiler is referred to *tsc* which takes TypeScript (*.ts/.tsx* files) and compiles it into JavaScript (*.js*) code that can be executed by a JavaScript runtime.

##### Transpilation

The conversion of TypeScript to JavaScript is known as transpilation. TypeScript extends JavaScript with features like static typing and interfaces, which are removed during transpilation to produce valid JavaScript code while preserving the intended behavior.

##### Configuration 

You can configure the compiler via a *tsconfig.json* file which allows you to:

- Specify compiler settings
- Include or exclude specific file or directories
- Customize other compilation settings

Run the following command in your terminal to create a default tsconfig.json file
>tsc --init

#### Installation 

TypeScript is available as a package on the npm registry available as "typescript".

Run the following command in your terminal to download TypeScript:
>npm install -g typescript

*Node.js required to run the package*

