import { motion } from "framer-motion";

import { styles } from "../styles";
import { ComputersCanvas } from "./canvas";

const Hero = () => {
  return (
    <section className={`relative w-full h-screen max-h-[50vh] mx-auto`}>
      <div
        className={`absolute inset-0 top-[120px] max-w-7xl mx-auto ${styles.paddingX} flex flex-row items-start gap-5`}
      >
        <div className="flex flex-col justify-center items-center mt-5">
          <div className="w-5 h-5 rounded-full bg-[#915EFF]" />
          <div className="w-1 sm:h-80 h-40 violet-gradient" />
        </div>

        <div>
          <h1 className={`${styles.heroHeadText} text-white`}>
            Hi, I'm <span className="text-[#915EFF]">Hoang Ho</span>
          </h1>
          <h1 className={`${styles.heroHeadSubText} text-white`}>
            I turn ideas into reality.
          </h1>
          <p className={`${styles.heroSubText} mt-2 text-white-100`}>
            I'm a Full Stack Software Engineer with strong problem-solving skills, specializing in creating
            exceptional digital experiences. With expertise in both front-end and back-end development, I work with
            a diverse range of technologies, including testing and traditional web applications. I enjoy solving challenging
            projects that drive innovation and deliver high-quality results. My experience in leading development teams has
            honed my ability to collaborate effectively and translate ideas into functional solutions. I am excited to contribute
            to dynamic projects that push the boundaries of technology.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Hero;
