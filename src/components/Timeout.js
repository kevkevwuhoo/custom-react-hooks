import { useState } from 'react';
import useTimeout from '../utils/useTimeout';

const Timeout = () => {
  const [count, setCount] = useState(5);
  const { clear, reset } = useTimeout(() => setCount(0), 1000);

  return (
    <div>
      <div>{count}</div>
      <button onClick={() => setCount((c) => c + 1)}>Increment</button>
      <button onClick={clear}>Clear Timeout</button>
      <button onClick={reset}>Reset Timeout</button>
    </div>
  );
};

export default Timeout;
