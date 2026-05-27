import React from "react";

import { styles } from "../styles";
import { services } from "../constants";
import { SectionWrapper } from "../hoc";
import TiltCard from "./TiltCard";

const ServiceCard = ({ index, title, icon }) => (
  <TiltCard className="xs:w-[250px] w-full" max={45} speed={450}>
    <div className="w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card">
      <div
        className="bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col"
      >
        <img
          src={icon}
          alt="web-development"
          loading="lazy"
          decoding="async"
          className="w-16 h-16 object-contain"
        />

        <h3 className="text-white text-[20px] font-bold text-center">
          {title}
        </h3>
      </div>
    </div>
  </TiltCard>
);

const About = () => {
  return (
    <>
      <div className="mt-[250px] xs:mt-[10px] sm:mt-[10px] md:mt-[0]">
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}>Overview.</h2>
      </div>

      <p className="mt-4 text-secondary text-[17px] max-w-5xl leading-[30px]">
        I'm a Senior Software Engineer with 6+ years of experience designing cloud-native systems, optimizing
        high-throughput backend services, and delivering full-stack products from architecture to production. My work spans
        Java, Python, JavaScript/TypeScript, Quarkus, Spring, Node.js, React, PostgreSQL, Kafka, AWS EKS, Lambda,
        Kinesis, Terraform, and CI/CD. I also lead teams, mentor engineers, run code reviews, and use AI-assisted
        workflows to move faster without lowering engineering quality.
      </p>

      <div className="mt-20 flex flex-wrap gap-10">
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(About, "about");
