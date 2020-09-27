# click-outside-react
## [live demo](https://jyoketsu.github.io/clickoutside-react/)
## Installation

```bash
yarn add @jyoketsu/click-outside-react
```

or

```
npm i @jyoketsu/click-outside-react
```

## Props
| Name                | Type             |
| ------------------- | ---------------- |
| onClickOutside      | Function         |
| style               | Object           |


## Usage

```jsx
import { ClickOutside } from '@jyoketsu/click-outside-react';

const MyComp = () => (
  <ClickOutside onClickOutside={() => alert('click-outside')}>
    <ChildComp />
  </ClickOutside>
);
```
