# Aliases and Interfaces in TypeScript

## Overview
TypeScript provides two primary ways to define custom types: **type aliases** and **interfaces**. Both are used to describe the shape of an object or other types, but they have distinct features and use cases.

---

## Type Aliases
A **type alias** is a way to give a type a name. It can represent strings,objects, arrays, and more.

### Syntax
```typescript
type AliasName = TypeDefinition;
```

### Example
```typescript
type StringAlias = string;
type Point = { x: number; y: number };
type UnionType = string | number;
```

### Features
1. Can represent any type, including primitives, unions, intersections, and tuples.
2. Cannot be reopened or extended after creation.

---

## Interfaces
An **interface** is like aliases, but only apply to object types.

### Syntax
```typescript
interface InterfaceName {
  property: Type;
}
```

### Example
```typescript
interface Point {
  x: number;
  y: number;
}

interface Drawable extends Point {
  draw(): void;
}
```

### Features
1. Can only describe object shapes.
2. Supports extension through inheritance (`extends` keyword).
3. Can be reopened and augmented across different declarations.
