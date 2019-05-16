# python-zip

> Iterate through Iterables together, until all or one of the iterables are over

Python's build-in function in JS.

# Install

```bash
npm i python-zip
```

# Usage

Default export is the "classic" zip function (quitting when one of the iterables is over).

Another export is the `zipLongest` function, who iterates until all the iterables are over.

## Default
```ts
import zip from 'python-zip';

const a = [1, 3, 5];
const b = [2, 4, 6];

for (const [i, j] of zip(a, b)) {
    console.log(i, j); // => 1 2 then 3 4 then 5 6
}
```

## Longest
```ts
import { zipLongest } from 'python-zip';

const a = [1, 3, 5, 7, 9];
const b = [2, 4, 6];

for (const [i, j] of zipLongest(a, b)) {
    console.log(i, j); // => 1 2 then 3 4 then 5 6 then 7 undefined then 9 undefined
}
```

