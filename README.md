# DSTS

**TL;DR** Data structures implemented in TypeScript.

[toc]

## Usage note

Consider you would like to use the `Stack` and `Queue` data structure.

```ts
import { ds } from "dsts";
// or
const { ds } = require("dsts");

const { Stack, Queue } = ds;
```

## Folder structure

```bash
src
├── adt
│   └── interfaces
├── ds
│   └── data structures
├── extended
│   └── DS with some added functionalities.
└── index.ts ➡️ the file from where everything is imported.
```

## Documentation

### Abstract Data Types

#### `NodeItem`

**`type`** &mdash; `NodeItem | null | undefined`

**`interface`**:
+ `value` &mdash; type: `any`.  The value to save in the node.
+ `next` &mdash; type: `NodeType`.  Reference to the next node.
+ `prev?` &mdash; (optional).  type: `NodeType`.  Reference to the previous node.
+ `key?` &mdash; (optional).  type: `any`.  The key to the value.

### Vanilla Data Structures

#### SingleNode

**implements** &mdash; [`NodeItem`](#NodeItem)

**properties**
+ `value` &mdash; (required).  type: `any`.  The value to be saved in the Node.
+ `next` &mdash; (optional).  type: `NodeType`.  Reference to the next node.  (default) `null`.

**methods**
+ `toString` &mdash; returns `string`.  Returns string representation of the node `value`.

### Extended Data Structures