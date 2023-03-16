import { useState } from "react";
import useFetch from './useFetch';

const useOnEnter = () => {
  const [consoleOutput, updateConsoleOutput] = useState([]);
  const myFetch = useFetch();

  const onEnter = (value, key, preAction, postAction) => {
    if (key === "Enter") {
      preAction?.();
      updateConsoleOutput(consoleOutput => [...consoleOutput, value]);
      myFetch(value).then(data => {
        updateConsoleOutput(consoleOutput => [...consoleOutput, data]);
        postAction?.();
      });
    }
  };

  return [consoleOutput, onEnter];
};

export default useOnEnter;