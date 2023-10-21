import {useEffect} from "react";
import {Canvas, Image, useCanvasRef, Circle, useValue, useTouchHandler} from "@shopify/react-native-skia";
 
import { View, Text } from 'react-native'
import React from 'react'

const canvas = () => {
  const cx = useValue(100);
  const cy = useValue(100);
 
  const touchHandler = useTouchHandler({
    onActive: ({ x, y }) => {
      cx.current = x;
      cy.current = y;
    },
  });
 
  return (
    <Canvas style={{ flex: 1 }} onTouch={touchHandler}>
      <Circle cx={cx} cy={cy} r={10} color="red" />
    </Canvas>
  );
}

export default canvas;