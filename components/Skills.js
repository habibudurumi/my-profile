/** @format */

import Cube from "./utils/Cube";

const Skills = () => {
  return (
    <section id='skills' className='py-4 '>
      <h1 className='text-center uppercase font-raleway font-bold text-2xl tracking-widest text-green-800'>
        skills & tools
      </h1>
      <div className=' my-10 py-10 flex md:hidden justify-center items-center '>
        <Cube />
      </div>
      <div className='relative top-0 left-0 border-2 border-green-800 bg-green-800 mt-[7rem] md:mt-[1rem]   w-full  py-4 px-12 lg:px-[8rem] rounded-md text-white text-opacity-70 tracking-wide'>
        <aside className='flex justify-between md:justify-between w-full'>
          <div>
            <h3>HTML</h3>
            <h3>CSS</h3>
            <h3>JavaScript</h3>
            <h3>React JS</h3>
            <h3>Typescript</h3>
            <h3>Next JS</h3>
          </div>
          <div className='hidden md:flex my-10  justify-center items-center '>
            <Cube />
          </div>

          <div>
            <h4>React (Jest)</h4>
            <h4>VS Code</h4>
            <h4>Git</h4>
            <h4>GitHub</h4>
            <h4>GraphQL</h4>
            <h4>Rest API</h4>
          </div>
        </aside>
      </div>
    </section>
  );
};

export default Skills;
