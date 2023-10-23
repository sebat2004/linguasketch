import { useEffect, useState } from "react";
import { Canvas, PaintStyle, Fill, Path, Skia, SkPath, SkPaint } from "@shopify/react-native-skia";
import { View } from 'react-native';
import React from 'react';
import AsyncStorage from "@react-native-async-storage/async-storage";
import { FlashcardProps } from "./Flashcard";
import { RawDelta } from "./DrawingBoard";

type Delta = {
  path: SkPath;
  paint: SkPaint;
};

const ImageDisplay = (props: FlashcardProps) => {
  const [deltas, setDeltas] = useState<Delta[]>([]);

  useEffect(() => { pull(); }, [props.eWord]);

  const pull = async () => {
    if(props.eWord){
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
  }

  return (
    <View style={{justifyContent: 'flex-start', alignItems: 'center', width: '100%'}}>
      <Canvas style={{margin: "5%", width: "90%", height: "75%"}}>
        <Fill color="white" />
        {deltas.map((delta, index) => {
          return <Path key={index} path={delta.path} paint={delta.paint} />
        })}
      </Canvas>  
    </View>
  );
}

export default ImageDisplay;