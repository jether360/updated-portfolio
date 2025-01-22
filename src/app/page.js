'use client'

import Image from "next/image";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import { useEffect, useState } from "react"; // Import useEffect and useState
import Pic from '../components/assets/pic.PNG';

export default function Home() {
  const [rendered, setRendered] = useState(false); // State to track if the component has rendered

  // useEffect to set rendered to true after the component has mounted
  useEffect(() => {
    setRendered(true);
  }, []);

  return (
    <div style={{ backgroundColor: "#fff", fontFamily: 'Arial, sans-serif', padding: '20px' }}>
      <main
        className={`flex max-h-screen flex-col items-center justify-between p-10 ${
          rendered ? "opacity-100 scale-100" : "opacity-0 scale-90"
        } transition-all duration-500 ease-in-out`}
        style={{ backgroundColor: "white", borderRadius: '10px', boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.1)', maxWidth: '600px', margin: 'auto' }}
      >
        <Image src={Pic} alt="Profile Picture" width={150} height={150} className="rounded-full shadow-md"/>
        <h1 className="lg:text-4xl font-bold text-gray-600 mt-5">
          Hello, I&lsquo;m Jether B. Balabagno
        </h1>
        <p className="lg:text-lg text-gray-700 mt-5 text-center">
          Enthusiastic and takes pleasure in creating innovative things.
        </p>
        <h2 className="lg:text-2xl font-semibold text-gray-500 mt-5">
          Software Developer
        </h2>

        <div className="flex mt-10 space-x-4">
          <a
            href="https://www.linkedin.com/in/jether-balabagno-421b42204/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 hover:text-blue-800"
          >
            <FaLinkedin className="text-4xl mb-2 cursor-pointer border-2 border-gray-500 rounded-full p-2 shadow-lg transition-transform hover:scale-110" />
          </a>
          <a
            href="https://github.com/jether360"
            target="_blank"
            rel="noopener noreferrer"
            className="text-black hover:text-gray-800"
          >
            <FaGithub className="text-4xl mb-2 cursor-pointer border-2 border-gray-500 rounded-full p-2 shadow-lg transition-transform hover:scale-110" />
          </a>
        </div>
      </main>
    </div>
  );
}
