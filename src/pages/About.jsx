import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";

import { CTA } from "../components";
import { experiences, skills } from "../constants";

import "react-vertical-timeline-component/style.min.css";

const About = () => {
  return (
    <section className="max-container">
      {/* INTRODUCTION */}
      <h1 className="head-text">
        Hello, I'm{" "}
        <span className="blue-gradient_text font-semibold drop-shadow">
          Durga
        </span>{" "}
        👋
      </h1>

      <div className="mt-5 flex flex-col gap-3 text-slate-500">
        <p>
          I'm a Full Stack Developer (Backend Focused) with hands-on experience
          building full-stack web applications and scalable REST APIs using
          Node.js, NestJS, Express.js, TypeScript, React, MongoDB, and
          PostgreSQL.
        </p>

        <p>
          I enjoy working across both frontend and backend development—from
          creating responsive user interfaces and integrating APIs to designing
          databases, implementing authentication, and building secure backend
          systems.
        </p>
      </div>

      {/* SKILLS */}
      <div className="py-10 flex flex-col">
        <h3 className="subhead-text">My Skills</h3>

        <div className="mt-16 flex flex-wrap gap-12">
          {skills.map((skill) => {
            const Icon = skill.icon;

            return (
              <div
                className="block-container w-20 h-20"
                key={skill.name}
                title={`${skill.name} - ${skill.type}`}
              >
                <div className="btn-back rounded-xl" />

                <div className="btn-front rounded-xl flex flex-col justify-center items-center gap-1">
                  <Icon className="w-9 h-9" />

                  <span className="text-xs font-medium text-center px-1">
                    {skill.name}
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* WORK EXPERIENCE */}
      <div className="py-16">
        <h3 className="subhead-text">Work Experience.</h3>

        <div className="mt-5 flex flex-col gap-3 text-slate-500">
          <p>
            Through internships, trainee programs, and practical development
            roles, I have gained practical experience in REST API development,
            JWT authentication, Role-Based Access Control (RBAC), database
            design, frontend-backend integration, debugging, and full-stack
            application development.
          </p>

          <p>Here is my professional journey:</p>
        </div>

        <div className="mt-12 flex">
          <VerticalTimeline>
            {experiences.map((experience) => (
              <VerticalTimelineElement
                key={experience.company_name}
                date={experience.date}
                iconStyle={{
                  background: experience.iconBg,
                }}
                icon={
                  <div className="flex justify-center items-center w-full h-full">
                    <img
                      src={experience.icon}
                      alt={experience.company_name}
                      className="w-[60%] h-[60%] object-contain"
                    />
                  </div>
                }
                contentStyle={{
                  borderBottom: "8px",
                  borderStyle: "solid",
                  borderBottomColor: experience.iconBg,
                  boxShadow: "none",
                }}
              >
                <div>
                  <h3 className="text-black text-xl font-poppins font-semibold">
                    {experience.title}
                  </h3>

                  <p
                    className="text-black-500 font-medium text-base"
                    style={{ margin: 0 }}
                  >
                    {experience.company_name}
                  </p>
                </div>

                <ul className="my-5 list-disc ml-5 space-y-2">
                  {experience.points.map((point, index) => (
                    <li
                      key={`experience-point-${index}`}
                      className="text-black-500/50 font-normal pl-1 text-sm"
                    >
                      {point}
                    </li>
                  ))}
                </ul>
              </VerticalTimelineElement>
            ))}
          </VerticalTimeline>
        </div>
      </div>

      <hr className="border-slate-200" />

      <CTA />
    </section>
  );
};

export default About;