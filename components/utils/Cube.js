/** @format */

import {
  FaReact,
  FaHtml5,
  FaCss3,
  FaJs,
  FaGitAlt,
  FaGithub,
} from "react-icons/fa";

const Cube = () => {
  return (
    <div className='cubespinner relative flex justify-center items-center mt-12 md:mt-0 '>
      <div className='faceOne'>
        <FaHtml5 className='text-red-600' />
      </div>
      <div className='faceTwo'>
        <FaCss3 className='text-blue-800' />
      </div>
      <div className='faceThree'>
        <FaJs className='text-yellow-600' />
      </div>
      <div className='faceFour'>
        <FaReact className='text-blue-600' />
      </div>
      <div className='faceFive'>
        <FaGitAlt className='text-[#dd0331]' />
      </div>
      <div className='faceSix'>
        <FaGithub className='text-black' />
      </div>
    </div>
  );
};

export default Cube;
