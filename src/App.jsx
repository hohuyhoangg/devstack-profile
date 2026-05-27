import { Suspense, lazy } from "react";

import About from "./components/About";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import ViewportLazy from "./components/ViewportLazy";

const Contact = lazy(() => import("./components/Contact"));
const Experience = lazy(() => import("./components/Experience"));
const Feedbacks = lazy(() => import("./components/Feedbacks"));
const Tech = lazy(() => import("./components/Tech"));
const Works = lazy(() => import("./components/Works"));
const StarsCanvas = lazy(() => import("./components/canvas/Stars"));

const App = () => {
  return (
    <div id="top" className="relative z-0 bg-primary">
      <div className="hero-surface">
        <Navbar />
        <Hero />
      </div>
      <About />
      <ViewportLazy minHeight={900} rootMargin="240px" waitForScroll>
        <Suspense fallback={null}>
          <Experience />
        </Suspense>
      </ViewportLazy>
      <ViewportLazy minHeight={260} rootMargin="240px" waitForScroll>
        <Suspense fallback={null}>
          <Tech />
        </Suspense>
      </ViewportLazy>
      <ViewportLazy minHeight={780} rootMargin="240px" waitForScroll>
        <Suspense fallback={null}>
          <Works />
        </Suspense>
      </ViewportLazy>
      <ViewportLazy minHeight={1} rootMargin="240px" waitForScroll>
        <Suspense fallback={null}>
          <Feedbacks />
        </Suspense>
      </ViewportLazy>
      <div className="relative z-0">
        <ViewportLazy minHeight={760} rootMargin="240px" waitForScroll>
          <Suspense fallback={null}>
            <Contact />
          </Suspense>
        </ViewportLazy>
        <ViewportLazy minHeight={1} rootMargin="240px" waitForScroll>
          <Suspense fallback={null}>
            <StarsCanvas />
          </Suspense>
        </ViewportLazy>
      </div>
    </div>
  );
};

export default App;
