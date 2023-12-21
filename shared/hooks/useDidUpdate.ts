

import { useEffect, useRef } from "react";


const useDidUpdate = (
  fn: () => void,
  deps: React.DependencyList = [],

) => {
  const mounted = useRef<boolean>(false);

  useEffect(() => {
    if (!mounted.current) {
      mounted.current = true;
      return;
    }
    fn();

  }, deps);

  return null;
};

export default useDidUpdate;