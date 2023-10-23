import { useState } from "react";
import { Canvas, PaintStyle, Fill, Path, Skia, SkPath, SkPaint } from "@shopify/react-native-skia";
import { FlashcardProps } from './Flashcard';
import { View } from 'react-native';
import React from 'react';
import AsyncStorage from "@react-native-async-storage/async-storage";
import { RawDelta } from './DrawingBoard';

type Delta = {
  path: SkPath;
  paint: SkPaint;
};

type RawDelta = {
  svgStr: string;
  width: number;
  color: string;
}

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

const DrawingBoard = (props: FlashcardProps) => {
  const [deltas, setDeltas] = useState<Delta[]>([]);

  const pull = async () => {
    const rIRead = await AsyncStorage.getItem(props.word);

    if(rIRead){
      const uPArr: string[] = JSON.parse(rIRead);
      const nDeltas: Delta[] = uPArr.map((value) => {
        const rawDelta: RawDelta = JSON.parse(value);
        const rawPaint: SkPaint = Skia.Paint();
        const rawColor: number[] = rawDelta.color.split(',').map((value) => parseFloat(value));

        rawPaint.setStyle(PaintStyle.Stroke);
        rawPaint.setStrokeWidth(rawDelta.width);        
        rawPaint.setColor(new Float32Array(rawColor));

        const fDelta: Delta = {
          path: Skia.Path.MakeFromSVGString(rawDelta.svgStr)!,
          paint: rawPaint
        };

        return fDelta;
      });

      setDeltas(nDeltas);
    }
  }
 
  return (
    <View style={{justifyContent: 'flex-start', alignItems: 'center', width: '100%'}}>
      <Canvas style={{margin: "5%", width: "90%", height: "50%"}} onTouch={touchHandler} ref={ref}>
        <Fill color="white" />
        {deltas.map((delta, index) => {
          return <Path key={index} path={delta.path} paint={delta.paint} />
        })}
      </Canvas>  
    </View>
  );
}

export default DrawingBoard;