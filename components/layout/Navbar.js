/** @format */

import { links, socials } from "../../data";
import { FaBars, FaTimes } from "react-icons/fa";
import Link from "next/link";
import Sidebar from "../Sidebar";
import { useGlobalContext } from "../../context";
import HireBtn from "../utils/HireBtn";
import SocialIcons from "../utils/SocialIcons";

const Navbar = () => {
  const { showMenu, toggleMenu } = useGlobalContext();
  return (
    <nav className='sticky top-0 right-0 w-full left-0 bg-opacity-80 bg-white shadow-md backdrop-blur-sm z-50'>
      <div className=' flex justify-between items-center py-5 px-6  md:px-12  max-w-[1280px] mx-auto'>
        {/* toggle Sidebar */}
        {!showMenu ? (
          <FaBars
            onClick={toggleMenu}
            className='cursor-pointer text-3xl text-green-700  md:hidden'
          />
        ) : (
          <FaTimes
            onClick={toggleMenu}
            className='cursor-pointer text-3xl  md:hidden z-40 text-red-600 hover:text-red-400'
          />
        )}

        {/* navigation links */}
        <ul className='hidden md:flex items-center uppercase'>
          {links.map((link) => {
            const { id, text, url } = link;
            return (
              <li
                key={id}
                className='text-green-800 font-bold mx-4 tracking-wider text-opacity-60 hover:text-green-800'>
                <Link href={url}>
                  <a>{text}</a>
                </Link>
              </li>
            );
          })}
        </ul>

        <HireBtn />
      </div>

      {showMenu && <Sidebar links={links} />}
    </nav>
  );
};

export default Navbar;
