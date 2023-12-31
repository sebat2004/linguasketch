import { useEffect, useState } from "react";
import { Canvas, PaintStyle, Fill, Path, Skia, SkPath, SkPaint } from "@shopify/react-native-skia";
import { View } from 'react-native';
import React from 'react';
import AsyncStorage from "@react-native-async-storage/async-storage";
import { FlashcardProps } from "./FlashcardVocabSide";
import { RawDelta } from "./FlashcardDrawingSide";

type Delta = {
  path: SkPath;
  paint: SkPaint;
};

const FlashcardReview = (props: FlashcardProps) => {
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
    <View style={styles.flashcard}>
      <Canvas style={{width: "90%", height: "100%"}}>
        <Fill color="white" />
        {deltas.map((delta, index) => {
          return <Path key={index} path={delta.path} paint={delta.paint} />
        })}
      </Canvas>  
    </View>
  );
}

const styles = {
  flashcard: {
    backgroundColor: 'white', 
    borderRadius: 20, 
    margin: "5%", 
    width: "80%", 
    height: 350, 
    justifyContent: 'center',
    alignItems: 'center', 
    shadowColor: '#171717',
    shadowOffset: {width: -1, height: 4},
    shadowOpacity: 0.2,
    shadowRadius: 3
  }
}

export default FlashcardReview;