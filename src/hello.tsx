import React, {FC} from 'react';
import {Container} from './Container';
import {MyComponent} from './MyComponent';

type Props = {};

export const Hello: FC<Props> = ({}) => {
  return <div>
    <h1>Detect children types</h1>
    <Container expectedChildrenTypes={[MyComponent, 'div', 'h1']}>
      <MyComponent/>
      <div>child1</div>
      <p>child2</p>
    </Container>
  </div>;
}
