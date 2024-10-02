<div align="center">
    <h1>react-ifz</h1>
    <a href="https://www.npmjs.com/package/react-ifz">react-ifz</a>
    <br />
    <br />
    <b><a href="https://codesandbox.io/p/sandbox/nj9k4j">LIVE EXAMPLE</a></b>
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

<When condition={statez === 1}>statez === 1: when</When>

// ****************************************************************
<If condition={statez === 2}>
    <Then>statez === 2: if</Then>
    <ElseIf condition={statez === 3}>statez === 3: else-if</ElseIf>
    <ElseIf condition={statez === 4}>statez === 4: else-if</ElseIf>
    <ElseIf condition={statez === 5}>statez === 5: else-if</ElseIf>
    <Else>state other</Else>
</If>

// ****************************************************************
<Switch>
    <Case condition={statez === 7}>Case === 7</Case>
    <Case condition={statez === 8}>
        Case === 8
    {/* <If condition={true}>
        <Else>state other</Else>
    </If> */}
    </Case>
    <Case condition={statez === 9}>Case === 9</Case>
    <Case condition={statez === 10}>Case === 10</Case>
    <Case condition={statez === 11}>Case === 11</Case>
</Switch>

```

### License

MIT
