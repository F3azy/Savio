import { useState, useEffect } from "react";
import useWindowWidth from "./useWindowWidth";

export default function useVisibleItems(breakPoints = [3, 2.5, 1.5]) {
  const [visibleElements, setVisibleElements] = useState(3);
  const [isExternal, setIsExternal] = useState(false);

  const windowWidth = useWindowWidth();

  useEffect(() => {
    if (windowWidth >= 1280) {
      setVisibleElements(breakPoints[0]);
      setIsExternal(false);
    } else if (windowWidth >= 768) {
      setVisibleElements(breakPoints[1]);
      setIsExternal(true);
    } else {
      setVisibleElements(breakPoints[2]);
      setIsExternal(true);
    }
  }, [windowWidth]);

  return { visibleElements, isExternal };
}
