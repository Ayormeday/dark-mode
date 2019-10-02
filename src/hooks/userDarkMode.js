import React, { useEffect } from 'react';
import { useLocalStorage } from './useLocalStorage';

export const useDarkMode = (key, initialValue) => {
    const [value, setValue] = useLocalStorage(key, initialValue);

    useEffect(() => {
      return value ?  document.body.className ='dark-mode' : initialValue;  
      }, initialValue);

    return [value, setValue];
}