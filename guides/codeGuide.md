# Code guide

## Naming

```javascript
// Constants (UPERCASE)
const PI = 3.14
const MAX_WIDTH = 1444

// Classes & Enums & Maps
class MyClass {
    constructor(){
        prop = null
    }

    method () {
        // code
    }
}

const Color = {
    WHITE: '#FFFFFF',
    BLACK: '#000000',
}

const ColorTypeToColor = {
    PRIMARY: Color.WHITE,
    SECONDARY: Color.BLACK,
}


// Variable & instance (camelCase)
const borderColor = Color.BLACK
const myClass = new MyClass()


// Function begins with a verb
const getColor = () => { // code }
```

## Import

```javascript
// The first from node_modules
import React from 'react'

// The second from project
import { Paper } from '@/ui/Paper'
import { light } from '@/ui/themes'
import { Styled } from './styles'
// The last types
import type { PaperProps } from './types'
```

## React

```javascript
// Type Components with React.FC<>
interface ContainerProps {
  someProp: string;
}

export const Container: React.FC<ContainerProps> = (props) => {
  const { someProps } = props
  return <Styled.Container>{someProp}</Styled.Container>
}
```

```javascript
// Children do not require typing
interface ContainerProps {
  someProp: string;
}

export const Container: React.FC<ContainerProps> = (props) => {
  const { children } = props
  return <Styled.Container>{children}</Styled.Container>
}
```

## Styled-components

```javascript
// Type Styled-Components:
export const Paper = styled.div < StyledPaperProps > `...`
```
