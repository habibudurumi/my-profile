/** @format */
import Image from "next/image";
import Link from "next/link";

import { FaGithub, FaInternetExplorer } from "react-icons/fa";
import { projectImage } from "../../data";

const ProjectCard = () => {
  return (
    <div className='flex flex-col lg:flex-row my-8'>
      {projectImage.map((project, index) => {
        const { id, image, githubLink, livePage } = project;
        return (
          <div
            className='relative  my-8 mx-0  border-2 rounded-md border-green-800 p-2 bg-green-800 lg:mx-4 lg:hover:scale-110  transition-all duration-500'
            key={id}>
            <Image
              className='absolute  top-0 left-0 rounded-md object-cover'
              objectFit='inherit'
              src={image}
              alt='image'
            />

            <div
              className='absolute bg-green-800 bg-opacity-90 
            w-full h-[50px] bottom-0 left-0 flex justify-center items-center text-xl text-white '>
              <Link href={githubLink}>
                <a
                  target='_blank'
                  className='mx-4 flex-1  items-center justify-center border-2 p-1 font-normal  text-white rounded-md hover:bg-white hover:text-green-800
                   ease-in-out duration-500'>
                  <h3 className='text-xs ml-2 text-center'>GitHub Code</h3>
                </a>
              </Link>
              <Link href={livePage}>
                <a
                  target='_blank'
                  className='mx-4 flex-1  items-normal justify-center border-2 p-1 font-medium  text-white rounded-md hover:bg-white hover:text-green-800 ease-in-out duration-500'>
                  <h3 className='text-sm text-center'>Live Site</h3>
                </a>
              </Link>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default ProjectCard;
