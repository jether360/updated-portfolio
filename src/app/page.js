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
    <div  style={{ backgroundColor: "white" }}>
    <main
      className={`flex max-h-screen flex-col items-center justify-between p-10 ${
        rendered ? "opacity-100 scale-100" : "opacity-0 scale-90" // Apply opacity and scale based on the rendered state
      } transition-all duration-500 ease-in-out`}
      style={{ backgroundColor: "white" }}
    >
      <Image src={Pic} alt="" width={200}/>
      <h1 className="lg:text-4xl font-bold text-gray-600">
        Hello, I&lsquo;m Jether B. Balabagno
      </h1>
      <p className="lg:text-lg text-gray-700 mt-10">
        `Enthusiastic and takes pleasure in creating innovative things.`
      </p>
      <h2 className="lg:text-2xl font-semibold text-gray-500 mt-10">
        Software Developer
      </h2>

      <div className="flex mt-10">
        <a
          href="https://www.linkedin.com/in/jether-balabagno-421b42204/"
          target="_blank"
          rel="noopener noreferrer"
          className="mr-4"
        >
          <FaLinkedin className="text-4xl mb-2 cursor-pointer border-2 border-gray-500 rounded-lg p-2 shadow-lg transition-transform hover:scale-110" style={{color: 'black'}}/>
        </a>
        <a
          href="https://github.com/jether360"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaGithub className="text-4xl mb-2 cursor-pointer border-2 border-gray-500 rounded-lg p-2 shadow-lg transition-transform hover:scale-110" style={{color: 'black'}}/>
        </a>
      </div>
    </main>
    </div>
  );
}