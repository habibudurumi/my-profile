/** @format */
import Image from "next/image";
import { images, socials } from "../data";
import SocialIcons from "./utils/SocialIcons";
const Hero = () => {
  return (
    <section
      id='#'
      className='bg-black bg-hero-pattern w-full min-h-[500px] bg-cover bg-center bg-blend-multiply bg-opacity-90 rounded-md  text-white flex-col lg:flex-row flex items-center py-[3rem] lg:py-0 lg:px-[5rem] justify-between -z-10'>
      <div className='px-4  lg:px-0 text-center lg:text-left'>
        <h2 className='  font-normal text-white text-opacity-50 text-md lg:tracking-wide md:text-lg'>
          Assalamu alaykum (Hi), my name is
        </h2>
        <h1 className='text-3xl md:text-5xl text-green-300 font-extrabold uppercase tracking-wider my-4 md:my-6'>
          Habibu haruna durumi
        </h1>
        <p className='font-normal  my-4 text-white text-opacity-50 text-md md:text-lg md:w-[500px] leading-8 lg:tracking-normal md:mx-auto lg:mx-0'>
          I am a <span className='text-green-300'>frontend web developer</span>{" "}
          who is disciplined to work with{" "}
          <span className='text-green-300'>latest technologies</span> on
          challenging and diverse projects.
        </p>
        <span className='mx-auto  lg:mx-0 text-green-300'>
          <SocialIcons socials={socials} />
        </span>
      </div>
      <span className='mt-10 border-2 rounded-full border-green-300 z-0'>
        <Image src={images.heroImage} height={300} width={300} alt='image' />
      </span>
    </section>
  );
};

export default Hero;
