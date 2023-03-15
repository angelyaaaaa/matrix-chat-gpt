import { useEffect, useRef, useState } from "react";
import Prompt from "./Prompt";
import Response from "./Response";
import { Typewriter } from 'react-simple-typewriter'

const MapConsoleOutput = ({ consoleOutput, onResponseDone }) => {
  const scrollRef = useRef(null);
  const textLengthRef = useRef(0);
  const [showCursor, setShowCursor] = useState(true);
  const [isCursorBlinking, setIsCursorBlinking] = useState(true);

  useEffect(() => {
    textLengthRef.current = 0;
    if (scrollRef.current) { scrollRef.current.scrollTop = scrollRef.current.scrollHeight }
  });

  const handleDone = (textLength) => {
    textLengthRef.current++;
    if (textLengthRef.current === textLength) {
      setShowCursor(false);
      setIsCursorBlinking(false);
      onResponseDone?.()
    }
  }

  return (
    <div className="console-output" ref={scrollRef}>
      {consoleOutput.map((item, index) => {
        return index %2 === 0 
          ? (
            <div key={index}>
              <Prompt />
              <span>{item}</span>
            </div>
          )
          : (
            <div key={index} style={{ height: 'auto', display: 'flex' }}>
              <Response />
              <Typewriter
                words={[item]}
                loop={1}
                cursor={showCursor}
                cursorBlinking={isCursorBlinking}
                delaySpeed={1000}
                onType={() => { handleDone(item.length) }}
              />
            </div>
          )
      })}
    </div>
  );
};

export default MapConsoleOutput;