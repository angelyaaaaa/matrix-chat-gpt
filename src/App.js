import { useEffect, useState, useCallback } from 'react';
import './App.css';
import MatrixRain from './MatrixRainScene/MatrixRain';
import Pills from './PillsScene/Pills';
import Console from './ConsoleScene/Console';

const animationTime = 8000;

function App() {
  const [showRain, setShowRain] = useState(true);
  const [showPillsPic, setShowPillsPic] = useState(true);
  const [showConsole, setShowConsole] = useState(false);
  const [pillsPicOpacity, setPillsPicOpacity] = useState(0);
  useEffect(() => {
    if (pillsPicOpacity === 0 || !showRain) {
      // fade in pills pic
      setTimeout(() => {
        setPillsPicOpacity(1);
      }, animationTime);
  
      // remove rain element later
      setTimeout(() => {
        setShowRain(false);
      }, animationTime + 500);
    }
  });

  const handleShowPillsFn = useCallback(() => {
    console.log()
    // fade in pills pic
    setPillsPicOpacity(1);
    setShowRain(false);
  }, []);

  const handleShowConsole = useCallback(() => {
    setShowPillsPic(false);
    setShowConsole(true);
  }, [])

  return (
    <div>
      {showRain && <MatrixRain /> }
      {/* {showPillsPic  && <div onClick={handleShowConsole} style={{ transition: 'all 1s', opacity: pillsPicOpacity }}><img src="./the-matrix-red-or-blue-pill_original.jpeg" alt="" /></div>} */}
      {showPillsPic && <Pills onShowConsole={handleShowConsole} opacity={pillsPicOpacity} />}
      {showConsole && <Console />}
    </div>
  )
}

export default App;
