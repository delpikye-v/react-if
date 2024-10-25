<div align="center">
    <h1>react-ifz</h1>
    <a href="https://www.npmjs.com/package/react-ifz">react-ifz</a>
    <br />
    <br />
    <b><a href="https://codesandbox.io/p/sandbox/2xn6yw">LIVE EXAMPLE</a></b>
</div>

<br />

[![NPM](https://img.shields.io/npm/v/react-ifz.svg)](https://www.npmjs.com/package/react-ifz)
[![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)
![Downloads](https://img.shields.io/npm/dt/react-ifz.svg)

---
## Description
+ React wrapper conditions
+ If/ElseIf/Else
+ Switch/Case

## Installation

install via npm:
```
npm i react-ifz
```

## Usage

#####
```js
import { Case, Else, ElseIf, If, Switch, Then, When, Default } from 'react-ifz';

const [statez, setStatez] = useState(1);

<button onClick={() => setStatez(statez + 1)}>Click</button>

// Single => should use this instead of <If />
<When condition={statez === 1}>
    when: statez === 1
</When>

// ****************************************************************
// ****************************************************************
// ****************************************************************

<If condition={statez === 1}>
    if: statez === 1
</If>

<If condition={statez === 2}>
    <Then>if: statez === 2</Then>

    <ElseIf condition={statez === 3}>
        statez === 3
    </ElseIf>

    <ElseIf condition={statez === 4}>
        statez === 4
    </ElseIf>

    <ElseIf condition={statez === 5}>
        statez === 5
    </ElseIf>

    <Else>state other any</Else>
</If>

// ****************************************************************
// ****************************************************************
// ****************************************************************
<Switch>
    <Case condition={statez === 7}>
        Case 7
    </Case>
    <Case condition={statez === 8}>
        Case 8
    </Case>
    {/*
    <Case condition={statez === 9}>Case === 9</Case>
    <Case condition={statez === 10}>Case === 10</Case>
    <Case condition={statez === 11}>Case === 11</Case>
    {/* <Default /> */}
    */}
</Switch>

// ****************************************************************
<Switch condition={prop.value}>
    <Case condition={7}>
        Case 7
    </Case>
    <Case condition={8}>
        Case 8
    </Case>
    {/*
    <Case condition={9}>Case === 9</Case>
    <Case condition={10}>Case === 10</Case>
    <Case condition={11}>Case === 11</Case>
    */}
    {/* <Default /> */}
</Switch>

```
<br />

## Note
```js
// => you should not write condition like this, even if it is supported.
<If condition={statez === 2}>
    <ElseIf condition={statez === 2}>
        statez === 2: else-if // not rendered
    </ElseIf>

    <Else>
        state other 2  // => Render if condtion !==2 and elseIf not true
    </Else>
</If>

<If condition={statez === 2}>
    <Else>state other 2</Else>  // => Render if condtion !==2
</If>

//***** */
// support tag: but you should not use it.
<Switch>
```

## License

MIT
