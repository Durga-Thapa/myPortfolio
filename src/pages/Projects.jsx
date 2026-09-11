import { Link } from "react-router-dom";

import { CTA } from "../components";
import { projects } from "../constants";
import { arrow } from "../assets/icons";

const Projects = () => {
  return (
    <section className="max-container">
      {/* Heading */}
      <h1 className="head-text">
        My{" "}
        <span className="blue-gradient_text drop-shadow font-semibold">
          Projects
        </span>
      </h1>

      {/* Description */}
      <p className="text-slate-500 mt-2 leading-relaxed">
        Here are some of the projects I have worked on during my learning,
        internship, trainee, and professional development journey. My projects include
        full-stack applications and backend systems focused on REST APIs,
        authentication, role-based access control, database design, and
        real-world application workflows.
      </p>

      {/* Projects */}
      <div className="flex flex-wrap my-20 gap-16">
        {projects.map((project) => (
          <div
            className="lg:w-[400px] w-full"
            key={project.name}
          >
            {/* Project Icon */}
            <div className="block-container w-12 h-12">
              <div
                className={`btn-back rounded-xl ${project.theme}`}
              />

              <div className="btn-front rounded-xl flex justify-center items-center">
                <img
                  src={project.iconUrl}
                  alt={project.name}
                  className="w-1/2 h-1/2 object-contain"
                />
              </div>
            </div>

            {/* Project Information */}
            <div className="mt-5 flex flex-col">
              <h4 className="text-2xl font-poppins font-semibold">
                {project.name}
              </h4>

              <p className="mt-2 text-slate-500">
                {project.description}
              </p>

              {/* Technologies */}
              {project.technologies && (
                <p className="mt-3 text-sm text-slate-600">
                  <span className="font-semibold">
                    Technologies:
                  </span>{" "}
                  {project.technologies}
                </p>
              )}

              {/* Project Link */}
              <div className="mt-5 flex items-center gap-2 font-poppins">
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-semibold text-blue-600"
                >
                  View Project
                </a>

                <img
                  src={arrow}
                  alt="arrow"
                  className="w-4 h-4 object-contain"
                />
              </div>
            </div>
          </div>
        ))}
      </div>

      <hr className="border-slate-200" />

      <CTA />
    </section>
  );
};

export default Projects;