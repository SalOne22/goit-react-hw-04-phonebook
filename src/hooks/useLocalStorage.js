import { useEffect, useState } from 'react';

export const useLocalStorage = (key, initialValue) => {
  let value = initialValue;

  try {
    const localState = localStorage.getItem(key);
    value = JSON.parse(localState);
  } catch (err) {
    console.error(err);
  }

  const [state, setState] = useState(value);

  useEffect(() => {
    try {
      const localState = JSON.stringify(state);
      localStorage.setItem(key, localState);
    } catch (err) {
      console.error(err);
    }
  }, [state, key]);

  return [state, setState];
};
