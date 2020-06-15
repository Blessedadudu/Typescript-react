import React from "react";
import { Counter } from "./Counter";

// props
// hooks
// render props

const App: React.FC = () => {
  return (
    <div style={{padding : '5rem', display: 'flex', justifyContent: 'center', fontSize:'15rem'}}>
      <Counter>
        {({ count, setCount }) => (
          <div>
            {count}
            <button onClick={() => setCount(count + 1)}>+</button>
          </div>
        )}
      </Counter>
    </div>
  );
};

export default App;
