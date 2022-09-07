/** @format */

import React from "react";
import ProjectCard from "./utils/ProjectCard";

const Projects = () => {
  return (
    <section id='projects' className='my-[2rem] w-full'>
      <h1 className='text-center uppercase font-raleway font-bold text-2xl tracking-widest text-green-800'>
        projects
      </h1>
      <ProjectCard />
    </section>
  );
};

export default Projects;
