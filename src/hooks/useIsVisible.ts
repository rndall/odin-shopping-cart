import { useState, useEffect, type RefObject } from "react";

export default function useIsVisible<T extends HTMLElement>(
  ref: RefObject<T | null>
) {
  const [isIntersecting, setIntersecting] = useState(false);

  useEffect(() => {
    if (!ref.current) return;

    // Create an IntersectionObserver to observe the ref's visibility
    const observer = new IntersectionObserver(
      ([entry]) => setIntersecting(entry.isIntersecting),
      { threshold: 0.5 }
    );

    // Start observing the element
    observer.observe(ref.current);

    // Cleanup the observer when the component unmounts or ref changes
    return () => {
      observer.disconnect();
    };
  }, [ref]);

  return isIntersecting;
}
