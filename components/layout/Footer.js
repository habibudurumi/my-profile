/** @format */

import SocialIcons from "../utils/SocialIcons";
import { socials } from "../../data";
import { FaCopy, FaCopyright } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className='bg-green-500  w-full py-8 bg-opacity-30 flex items-center justify-center flex-col text-green-800'>
      <SocialIcons socials={socials} />
      <p className='mt-4 text-xs'>
        {" "}
        <span className='text-sm'> &copy;</span>
        {new Date().getFullYear()}{" "}
        <span className='text-xs'>Habibu Haruna Durumi </span>
      </p>
      <p className='text-xs'>All Rights Reserved</p>
      <p className='text-xs'></p>
    </footer>
  );
};

export default Footer;
