import { useState } from "react";
import useFetch from './useFetch';

const useOnEnter = () => {
  const [consoleOutput, updateConsoleOutput] = useState([]);
  const mockFetch = useFetch();

  const onEnter = (value, key, preAction, postAction) => {
    if (key === "Enter") {
      preAction?.();
      updateConsoleOutput(consoleOutput => [...consoleOutput, value]);
      mockFetch(value).then(data => {
        updateConsoleOutput(consoleOutput => [...consoleOutput, data]);
        postAction?.();
      });
    }
  };

  return [consoleOutput, onEnter];
};

export default useOnEnter;