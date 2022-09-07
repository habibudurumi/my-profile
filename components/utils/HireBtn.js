/** @format */
import Link from "next/link";
const HireBtn = () => {
  return (
    <button className='bg-red-600 py-2 space-y-2 px-8  text-white uppercase rounded-sm font-medium sm:text-xs  tracking-wider animate-wiggle hover:bg-red-400'>
      <Link href='mailto:habibuharunadurumi@gmail.com'>
        <a target='_blank'>hire me</a>
      </Link>
    </button>
  );
};

export default HireBtn;
