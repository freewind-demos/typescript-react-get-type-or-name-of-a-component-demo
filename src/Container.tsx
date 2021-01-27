import React, {FC, PropsWithChildren, ReactNode} from 'react';

type Props = {
  expectedChildrenTypes: any[]
}

function getComponentType(reactNode: ReactNode): any | undefined {
  const componentType = (reactNode as any)?.type;
  return componentType;
}

export const Container: FC<PropsWithChildren<Props>> = ({children, expectedChildrenTypes}) => {
  return <div>{
    React.Children.toArray(children).map((child, index) => {
      const childType = getComponentType(child);
      const expectedType = expectedChildrenTypes[index];
      return <div style={{border: "1px solid black", margin: 10}}>
        <div style={{backgroundColor: '#CCC'}}>componentType: {childType?.toString()}</div>
        <div style={{backgroundColor: '#DDD'}}>expected componentType: {expectedType.toString()}</div>
        <div style={{backgroundColor: '#EEE'}}>same as expect?: {JSON.stringify(expectedType === childType)}</div>
        <div>{child}</div>
      </div>;
    })
  }</div>;
}
