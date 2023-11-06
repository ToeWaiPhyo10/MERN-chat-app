import { useEffect, useState } from "react";

export const useDebounce = ({ searchValue, delay }) => {
  const [debounceValue, setDebounceValue] = useState();

  useEffect(() => {
    const handler = setTimeout(() => {
      setDebounceValue(searchValue);
    }, delay);
    return () => clearTimeout(handler);
  }, [searchValue, delay]);

  return debounceValue;
};
