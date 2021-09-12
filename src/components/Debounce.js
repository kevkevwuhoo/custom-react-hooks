import { useState } from 'react';
import useDebounce from '../utils/useDebounce';

const Debounce = () => {
  const [count, setCount] = useState(5);
  useDebounce(() => alert(count), 1000, [count]);

  return (
    <div>
      <div>{count}</div>
      <button onClick={() => setCount((c) => c + 1)}>Increment</button>
    </div>
  );
};
