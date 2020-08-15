import { useState, useEffect } from "react";

export const useMedia = query => {
  const [matches, setMatches] = useState();

  useEffect(() => {
    let media = window.matchMedia(query);
    if (media.matches !== matches) {
      setMatches(media.matches);
    }
    let listener = () => setMatches(media.matches);
    media.addListener(listener);
    return () => media.removeListener(listener);
  }, [query, matches]);

  return matches;
};
