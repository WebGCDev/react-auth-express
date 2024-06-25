import React, { createContext, useContext, useState } from 'react';

// contesto
const CountContext = createContext();

// componente CountProvider
export function CountProvider({ children }) {
  const [count, setCount] = useState(0);

  const increment = () => setCount((prevCount) => prevCount + 1);
  const decrement = () => setCount((prevCount) => prevCount - 1);

  return (
    <CountContext.Provider value={{ count, increment, decrement }}>
      {children}
    </CountContext.Provider>
  );
}

// Hook personalizzato per Count
export function useCount() {
  return useContext(CountContext);
}
