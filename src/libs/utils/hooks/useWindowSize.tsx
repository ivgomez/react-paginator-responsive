import { useState, useEffect } from "react";
import { gridFunction } from "../theme";

const { breakpoints } = gridFunction;

export function useWindowSize(defaultWidth?: any, defaultHeight?: any) {
  const isClient = typeof window === "object";

  function getSize() {
    return {
      width: isClient ? window.innerWidth : defaultWidth,
      height: isClient ? window.innerHeight : defaultHeight,
    };
  }

  const [windowSize, setWindowSize] = useState(getSize);
  const isXs = windowSize.width <= breakpoints.xs;
  const isMobile = windowSize.width < breakpoints.sm;
  const isTablet =
    windowSize.width >= breakpoints.sm && windowSize.width < breakpoints.md;
  const isDesktop = windowSize.width >= breakpoints.md;

  useEffect((): any => {
    if (!isClient) {
      return false;
    }

    function handleResize() {
      setWindowSize(getSize());
    }

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return { windowSize, isXs, isMobile, isTablet, isDesktop };
}
