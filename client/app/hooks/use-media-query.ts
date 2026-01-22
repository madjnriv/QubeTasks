import { useEffect, useState } from "react";

export const useMediaQuery = (query: string) => {
  const [matches, setMatches] = useState(window.matchMedia(query).matches);

  useEffect(() => {
    const mediaQueryList = window.matchMedia(query);
    const windowResizeHandler = () => setMatches(mediaQueryList.matches);

    mediaQueryList.addEventListener("resize", windowResizeHandler);

    return () => {
      mediaQueryList.removeEventListener("resize", windowResizeHandler);
    };
  }, [query]);

  return matches;
};
