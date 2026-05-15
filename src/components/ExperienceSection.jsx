

import { experiences } from "../data/ExperienceData";
import ExperienceCard from "../components/ExperienceCard";
import HeadingAnim from "./HeadingAnim";
import { motion } from "framer-motion";

const Experience = () => {
  const container = {
    hidden: {},
    show: {
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const item = {
    hidden: {
      opacity: 0,
      y: 40,
    },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.7,
        ease: "easeOut",
      },
    },
  };

  return (
    <section className="py-10 text-white">
      <HeadingAnim name="Experience" />

      <motion.div
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.15 }}
        className="flex flex-col gap-10"
      >
        {experiences.map((exp) => (
          <motion.div
            key={exp.id}
            variants={item}
            whileHover={{ y: -4 }}
            transition={{ duration: 0.3 }}
          >
            <ExperienceCard exp={exp} />
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

export default Experience;