# Reconstruct

Maps object into a new one using an anonymous function.

## Installation

Install it using Yarn or NPM.

```sh
yarn add reconstruct

# With NPM
npm i reconstruct
```

## Usage

Reconstruct provides a function to map an iterate over object value & properties returning new one to compose result.

```js
import reconstruct from 'reconstruct'

const invert = (value, property) => ({ [value]: property })

reconstruct({ A: 1, B: 2 }, invert) == { '1': 'A', '2': 'B' }
```

## License
Released under MIT license. You can see it [here](./LICENSE).
