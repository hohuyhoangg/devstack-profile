import { Suspense, lazy } from "react";

import { SectionWrapper } from "../hoc";
import { technologies } from "../constants";
import ViewportLazy from "./ViewportLazy";

const BallCanvas = lazy(() => import("./canvas/Ball"));

const Tech = () => {
  return (
    <>
      <div className="flex flex-row flex-wrap justify-center gap-10">
        {technologies.map((technology) => (
          <div className="w-28 h-28" key={technology.name}>
            <ViewportLazy minHeight={112} rootMargin="80px">
              <Suspense fallback={null}>
                <BallCanvas icon={technology.icon} />
              </Suspense>
            </ViewportLazy>
          </div>
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(Tech, "tech");
