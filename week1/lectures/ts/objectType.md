# TypeScript object type

Typescript **object** type represents all values that aren't primitive types.

Primitive types are:

- string
- number
- boolean
- null
- undefined
- symbol

## Examples

### Declaring an object type

```typescript
let person: object;

person = {
  name: "bob",
  age: 65,
};

console.log(person);
```

Output:

```console
{
name: "bob",
age: 65
}
```

An object type can not be ressigned to a primitive type.
This will result in an error.

---

Explicity asigning properties to a person object.

```typescript
let person: {
  name: string;
  age: number;
};

person = {
  name: "dan",
  age: 45,
};
```

Here we start by defining the person object and its properties.
Then we assign the person object to a literal object with described properties.

### required properties:

name and age are required properties.

```typescript
function printPerson(person: { name: string; age: number }) {
  console.log(`Name: ${person.name}`);
  console.log(`Age: ${person.age}`);
}

printPerson({ name: "bob", age: 100 });
printPerson({ name: "Dan", age: 45 });
```

### Output:

```console
    Name: bob
    Age: 100
    Name: Dan
    Age: 45
```

### Optional properties:

Use ? to make a property optional. age is optional.

```typescript
function printPerson(person: { name: string; age?: number }) {
  console.log(`Name: ${person.name}`);
  console.log(`Age: ${person.age}`);
}

printPerson({ name: "bob", age: 100 });
printPerson({ name: "Dan" });
```

### Output:

```console
    Name: bob
    Age: 100
    Name: Dan
    Age: undefined
```
