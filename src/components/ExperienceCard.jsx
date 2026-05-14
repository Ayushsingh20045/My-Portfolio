

const ExperienceCard = ({ exp }) => {
  return (
    <div className="flex justify-center">
      <div className="w-[85%] lg:w-[70%] flex flex-col md:flex-row border border-teal-500 rounded-2xl overflow-hidden text-white bg-[#0f172a] ">
        {/* Content */}
        <div className="flex flex-col justify-center  md:w-[70%] p-6">
          {/* Top */}
          <div className="max-w-2xl">
            {" "}
            {/* 🔥 important */}
            <h1 className="text-2xl md:text-3xl font-bold leading-snug md:text-nowrap text-wrap">
              {exp.role} <span className="text-gray-400">@</span>{" "}
              <span className="text-blue-400 hover:underline cursor-pointer">
                <a href={exp.companyLink}> {exp.company}</a>
              </span>
            </h1>
            <p className="text-gray-400 text-sm mt-1">
              {exp.duration} • {exp.location}
            </p>
            <ul className="mt-4 space-y-2 text-gray-300  leading-relaxed md:text-lg md:text-nowrap">
              {exp.description?.map((item, i) => (
                <li key={i} className="flex gap-2">
                  <span className="text-teal-400">•</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Tech Stack */}
          <div className="flex flex-wrap gap-2 mt-6">
            {exp.techStack?.map((item, i) => (
              <span
                key={i}
                className="text-xs border border-teal-600 px-3 py-1 rounded-full"
              >
                {item}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExperienceCard;