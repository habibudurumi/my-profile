/** @format */
import Link from "next/link";
import { useGlobalContext } from "../context";
const Sidebar = ({ links }) => {
  const { toggleMenu } = useGlobalContext();
  return (
    <nav className='absolute z-30 top-0 left-0 uppercase w-[60%] h-screen bg-green-800 bg-opacity-95 text-white transition-all duration-500 ease-in-out lg:hidden'>
      <ul className='mt-[6rem] md:pl-20 px-4'>
        {links.map((link) => {
          const { id, number, text, url } = link;
          return (
            <li key={id} className='my-6 font-bold tracking-widest pl-8  '>
              <Link href={url}>
                <a
                  onClick={toggleMenu}
                  className='hover:text-opacity-100 text-white text-opacity-50'>
                  {text}
                </a>
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

export default Sidebar;
