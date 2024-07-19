import React, { useState } from "react";
import Counter from "./Components/Counter";

const App = () => {
  const [count, setCount] = useState(0);

  const maxLimit = 10;
  const minLimit = -10;

  const incriment = () => {
    if (maxLimit > count) setCount(count + 1);
  };

  const deciment = () => {
    if (minLimit < count) setCount(count - 1);
  };
  return (
    <div>
      <Counter
        count={count}
        incriment={incriment}
        deciment={deciment}
        maxLimit={maxLimit}
        minLimit={minLimit}
      />
    </div>
  );
};

export default App;
