/** @format */
import Link from "next/link";
const SocialIcons = ({ socials }) => {
  return (
    <section className='flex justify-center lg:justify-start '>
      {socials.map((social) => {
        const { id, url, icon } = social;
        return (
          <Link href={url} key={id}>
            <a
              target='_blank'
              className='mr-6 text-2xl text-opacity-50  hover:scale-110 duration-300 ease-in-out'>
              {icon}
            </a>
          </Link>
        );
      })}
    </section>
  );
};

export default SocialIcons;
