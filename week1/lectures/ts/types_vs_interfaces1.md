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