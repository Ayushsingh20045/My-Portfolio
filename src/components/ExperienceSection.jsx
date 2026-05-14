import { experiences } from "../data/ExperienceData";
import ExperienceCard from "../components/ExperienceCard";
import HeadingAnim from "./HeadingAnim";
const Experience = () => {
  return (
    <section className="py-10 text-white  ">
      <HeadingAnim name="Experience" />

      <div className=" flex flex-col gap-10 ">
        {experiences.map((exp) => (
          <ExperienceCard key={exp.id} exp={exp} />
        ))}
      </div>
    </section>
  );
};

export default Experience;
