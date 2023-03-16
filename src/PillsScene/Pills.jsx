const Pills = ({ onShowConsole, opacity }) => (
  <div 
    onClick={onShowConsole}
    style={{ transition: 'all 1s', opacity }}
  >
    <img src="./the-matrix-red-or-blue-pill_original.jpeg" alt="" />
  </div>
);

export default Pills;