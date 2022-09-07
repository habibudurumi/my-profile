/** @format */

import Head from "next/head";
import About from "../components/About";
import Hero from "../components/Hero";
import Projects from "../components/Projects";
import Skills from "../components/Skills";

export default function Home() {
  return (
    <>
      <Head>
        <title>habibuHD</title>
        <meta name='description' content='Profile | Habibu Haruna D.' />
        <link rel='icon' href='/favicon.ico.png' />
      </Head>

      <main className='max-w-[1280px] relative py-10 min-w-screen  mx-auto px-6 md:px-12 bg-gray-100'>
        <Hero />
        <About />
        <Skills />
        <Projects />
      </main>
    </>
  );
}
