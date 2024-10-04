<div align="center">
    <h1>react-ifz</h1>
    <a href="https://www.npmjs.com/package/react-ifz">react-ifz</a>
    <br />
    <br />
    <b><a href="https://codesandbox.io/p/sandbox/2xn6yw">LIVE EXAMPLE</a></b>
</div>

[![NPM](https://img.shields.io/npm/v/react-ifz.svg)](https://www.npmjs.com/package/react-ifz) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

---
## Description
+ React wrapper conditions
+ Remove duplicate condition

## Installation

install via npm:
```
npm i react-ifz
```

## Usage

#####
```js
import { Case, Else, ElseIf, If, Switch, Then, When } from 'react-ifz';

const [statez, setStatez] = useState(1);

<button onClick={() => setStatez(statez + 1)}>Click</button>

// render anything in the state
<When condition={statez === 1}>
    statez === 1: when
</When>

// render anything in the state
<If condition={statez === 1}>
    statez === 1: if
</If>

// render with condition
<If condition={statez === 2}>
    <Then>statez === 2: if</Then>

    <ElseIf condition={statez === 3}>
        statez === 3: else-if
    </ElseIf>

    <ElseIf condition={statez === 4}>
        statez === 4: else-if
    </ElseIf>

    <ElseIf condition={statez === 5}>
        statez === 5: else-if
    </ElseIf>

    <Else>state other 2</Else>
</If>

<Switch>
    <Case condition={statez === 7}>
        Case 7
    </Case>
    <Case condition={statez === 8}>
        Case 8
    </Case>
    {/* <Case condition={statez === 9}>Case === 9</Case>
    <Case condition={statez === 10}>Case === 10</Case>
    <Case condition={statez === 11}>Case === 11</Case> */}
</Switch>

```
<br />

## Note
```js
// => dont render this condition
<If condition={statez === 2}>
    <ElseIf condition={statez === 2}>statez === 2: else-if</ElseIf>
    <Else>state other 2</Else>
</If>

<If condition={statez === 2}>
    <Else>state other 2</Else>
</If>

//***** */
<Switch> support tag: but you don't need to use it.
```

## License

MIT
