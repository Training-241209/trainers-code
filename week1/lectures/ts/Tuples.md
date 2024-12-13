# What is Tuples in TypeScript?

<div id="header" align="center">

  <img src="https://cdn.hashnode.com/res/hashnode/image/upload/v1683612933716/61ad7805-e527-4dd3-b4a6-3532172c6c32.jpeg?w=1600&h=840&fit=crop&crop=entropy&auto=compress,format&format=webp" width="800" height="400">

</div>

## Definition
Tuple is a typed array with a predefined length and types for each index. Tuples allow each element in the array to be known type of value.

## How to define a tuple?

```typescript
let ourTuple: [number, boolean, string];
```

In this case, our tuple is an array with the first index as a number, second as a boolean, and third as a string.

## How to initialize a tuple?

Using the example above,

```typescript
ourTuple = [5, false, 'TypeScript is Awesome'];
```

As you can see we have a number, boolean, and a string.


## What happens if we set them in the wrong order?

```typescript
ourTuple = [false, 'TypeScript is Awesome', 5];
```

In this case, a type error will be thrown. **Order matters** in TypeScript.

## Best Practices

A good practice is to make your tuple `readonly`. Using the `readonly` keyword, you can prevent accidentally changing your tuple.

Example:

```typescript
// define our tuple
let ourTuple: [number, boolean, string];

// initialize correctly
ourTuple = [5, false, 'TypeScript is Awesome'];

// We have no type safety in our tuple for indexes 3+
ourTuple.push('Something new and wrong');
console.log(ourTuple); 
// Our tuple becomes [ 5, false, 'TypeScript is Awesome', 'Something new and wrong' ]
```

Instead add the `readonly` keyword to prevent modification:

```typescript
// define our readonly tuple
const ourReadonlyTuple: readonly [number, boolean, string] = [5, true, 'TypeScript is Awesome'];

// throws error as it is readonly
ourReadonlyTuple.push('JavaScript is better');
```

## Tuple Destructuring

Since tuples are arrays we can destructure them.

```typescript
const ourReadonlyTuple: readonly [number, boolean, string] = [5, true, 'TypeScript is Awesome'];
const [firstIndex, secondIndex, thirdIndex] = ourReadonlyTuple;
```
In this case, firstIndex = 5, secondIndex = true, and thirdIndex = 'TypeScript is Awesome'.


## Named Tuples

Named tuples allow us to provide context to our values at each index.

Example:

```typescript
const person: [name: string, age: number] = ["Bob", 25];
```

Named tuples provide more context for what our index values represent.







