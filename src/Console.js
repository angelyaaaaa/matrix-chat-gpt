import { useEffect, useRef, useState } from "react";
import Prompt from "./Prompt";
import PendingPrompt from "./PendingPrompt";
import useOnEnter from "./useOnEnter";
import MapConsoleOutput from "./MapConsoleOutput";

const Console = () => {
  const inputTextRef = useRef(null);

  const [pending, setPending] = useState(false);
  const [inputValue, setInputValue] = useState('');
  const [consoleOutput, onEnter] = useOnEnter();

  useEffect(() => {
    setTimeout(() => {
      if (pending) { 
        inputTextRef?.current.blur();
      } else {
        inputTextRef?.current.focus();
      }
    }, 500);
  }, [pending]);

  const handleResponseDone = () => {
    setPending(false);
    inputTextRef?.current.focus();
  }

  return (
    <section className="console">
      <MapConsoleOutput consoleOutput={consoleOutput} onResponseDone={handleResponseDone} />
      <div className="input-prompt">
        {pending ? <PendingPrompt /> : <Prompt />}
        <input
          type="text"
          ref={inputTextRef}
          onChange={({ target }) => setInputValue(target.value) }
          value={inputValue}
          onKeyDown={({ key }) => onEnter(inputValue, key, () => { setPending(true); setInputValue(''); })}
        />
      </div>
    </section>
  );
};

export default Console;