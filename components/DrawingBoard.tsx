import { useState, useRef } from "react";
import { Canvas, PaintStyle, useCanvasRef, Fill, Path, useTouchHandler, Skia, SkPath, SkPaint } from "@shopify/react-native-skia";
import { View, Text, Button } from 'react-native';
import React from 'react';
import AsyncStorage from "@react-native-async-storage/async-storage";

type FlashcardProps = {
  language: string,
  category: string,
  word: string,
  eWord: string
}

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

  const save = async () => {
    const pData: string[] = deltas.map((value) => {
      return JSON.stringify({
        svgStr: value.path.toSVGString(),
        width: value.paint.getStrokeWidth(),
        color: value.paint.getColor().toString()
      });
    });
    
    await AsyncStorage.setItem(props.eWord, JSON.stringify(pData));

    const list = await AsyncStorage.getItem(props.language);

    await AsyncStorage.setItem(props.language, list ? list + ';' + props.eWord : props.eWord);

    console.log(await AsyncStorage.getItem(props.language));
  }

  const pull = async () => {
    const rIRead = await AsyncStorage.getItem(props.eWord);

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
      <Text style={{textAlign: 'center'}}>{props.eWord + ' : ' + props.word}</Text>
      <Canvas style={{margin: "5%", width: "90%", height: "50%"}} onTouch={touchHandler} ref={ref}>
        <Fill color="white" />
        {deltas.map((delta, index) => {
          return <Path key={index} path={delta.path} paint={delta.paint} />
        })}
      </Canvas>
      <View style={{flexWrap: 'wrap', display: 'flex', flexDirection: 'row', justifyContent: 'space-around', width: "90%"}}>
        <Button onPress={undo} title="Undo" color="#841584" />
        <Button onPress={setPen} title="Draw" color="#841584" />
        <Button onPress={setEraser} title="Erase" color="#841584" />
        <Button onPress={save} title="Save" color="#841584" />
        <Button onPress={pull} title="Use Stored" color="#841584" />
      </View>   
    </View>
  );
}

export type { RawDelta };
export default DrawingBoard;