import React, {useState} from 'react'
import SlowComponent from './SlowComponent';

function App() {
  let [state, setState] = useState('');
  return (
    <div>
      <input onChange={(e) => setState(e.target.value)} />
      <div>TEXT: {state}</div>
      <SlowComponent />
    </div>
  );
}

export default App;
