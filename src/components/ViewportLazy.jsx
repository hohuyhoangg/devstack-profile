import { useEffect, useRef, useState } from "react";

const ViewportLazy = ({
  children,
  className = "",
  minHeight = 1,
  rootMargin = "0px",
  waitForScroll = false,
}) => {
  const ref = useRef(null);
  const [canObserve, setCanObserve] = useState(!waitForScroll);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    if (!waitForScroll || canObserve) return;

    const enable = () => setCanObserve(true);

    window.addEventListener("scroll", enable, { once: true, passive: true });
    window.addEventListener("wheel", enable, { once: true, passive: true });
    window.addEventListener("touchstart", enable, { once: true, passive: true });
    window.addEventListener("keydown", enable, { once: true });
    window.addEventListener("hashchange", enable, { once: true });

    return () => {
      window.removeEventListener("scroll", enable);
      window.removeEventListener("wheel", enable);
      window.removeEventListener("touchstart", enable);
      window.removeEventListener("keydown", enable);
      window.removeEventListener("hashchange", enable);
    };
  }, [canObserve, waitForScroll]);

  useEffect(() => {
    if (!canObserve || isVisible) return;

    const element = ref.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { rootMargin }
    );

    observer.observe(element);

    return () => observer.disconnect();
  }, [canObserve, isVisible, rootMargin]);

  return (
    <div ref={ref} className={className} style={!isVisible ? { minHeight } : undefined}>
      {isVisible ? children : null}
    </div>
  );
};

export default ViewportLazy;
