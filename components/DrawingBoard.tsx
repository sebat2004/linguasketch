import { useState, useRef } from "react";
import { Canvas, PaintStyle, useCanvasRef, Fill, Path, useTouchHandler, Skia, SkPath, SkPaint } from "@shopify/react-native-skia";
 
import { View, Text, Button } from 'react-native'
import React from 'react'

type Delta = {
  path: SkPath;
  paint: SkPaint;
};

const penPaint = () => {
  const paint = Skia.Paint();

  paint.setStyle(PaintStyle.Stroke);
  paint.setStrokeWidth(4);
  paint.setColor(Skia.Color("#000000"));

  return paint;
}

const eraserPaint = () => {
  const paint = Skia.Paint();

  paint.setStyle(PaintStyle.Stroke);
  paint.setStrokeWidth(12);
  paint.setColor(Skia.Color("#FFFFFF"));

  return paint;
}

const DrawingBoard = () => {
  const ref = useCanvasRef();
  const [deltas, setDeltas] = useState<Delta[]>([]);
  const cPaint = useRef<SkPaint>(penPaint());
  const cPath = useRef<SkPath | null>(null);
  
  const touchHandler = useTouchHandler({
      onStart: ({ x, y }) => {
        cPath.current = Skia.Path.Make();
        cPath.current.moveTo(x, y);

        console.log(cPaint.current.getColor());

        setDeltas(values => values.concat({
          path: cPath.current!,
          paint: cPaint.current
        }));
      },
      onActive: ({ x, y }) => {
        cPath.current!.lineTo(x, y);
      },
      onEnd: ({ x, y }) => {
        cPath.current!.lineTo(x, y);
      },
  });

  const undo = () => {
    setDeltas(values => values.length > 0 ? values.slice(0, values.length - 1) : []);
  }

  const setEraser = () => {
    cPaint.current = eraserPaint();
  }

  const setPen = () => {
    cPaint.current = penPaint();
  }
 
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Canvas style={{width: 200, height: 150}} onTouch={touchHandler} ref={ref}>
        <Fill color="white" />
        {deltas.map((delta, index) => {
          return <Path key={index} path={delta.path} paint={delta.paint} />
        })}
      </Canvas>
      <View style={{}}>
        <Text>{"Erase: " + cPaint.current.getColor()}</Text>
        <Button onPress={undo} title="Undo" color="#841584" />
        <Button onPress={setPen} title="Draw" color="#841584" />
        <Button onPress={setEraser} title="Erase" color="#841584" />
      </View>      
    </View>
  );
}

export default DrawingBoard;