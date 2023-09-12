"use client";

import Image from "next/image";
import firstPic from "../../components/assets/123.PNG";
import secondPic from "../../components/assets/1234.PNG";
import thirdPic from "../../components/assets/12345.PNG";
import { useEffect, useState } from "react"; // Import useEffect and useState

const Projects = () => {
  const [rendered, setRendered] = useState(false); // State to track if the component has rendered

  // useEffect to set rendered to true after the component has mounted
  useEffect(() => {
    setRendered(true);
  }, []);

  return (
    <div
      className={`grid grid-cols-1 md:grid-cols-2 gap-4 lg:p-20 ${
        rendered ? "opacity-100 scale-100" : "opacity-0 scale-90"
      } transition-all duration-500 ease-in-out`}
    >
      {/* First Project */}
      <div className="max-w-xl mx-auto bg-white rounded-xl shadow-md overflow-hidden transform transition-transform hover:scale-105 animate-fade-in">
        <div className="relative">
          <Image src={firstPic} alt="" width={800} height={500} />
          <div className="absolute bottom-0 w-full bg-black bg-opacity-50 text-white p-4">
            <div className="uppercase tracking-wide text-sm text-white-700 font-semibold">
              Real Estate Api
            </div>
            <p className="mt-2 text-gray-100">
              This app is for real estate broker, and I built the backend environment
              with the Django Rest Framework and Swagger for documentation.
            </p>
          </div>
        </div>
      </div>

      {/* Second Project */}
      <div className="max-w-xl mx-auto bg-white rounded-xl shadow-md overflow-hidden transform transition-transform hover:scale-105 animate-fade-in">
        <div className="relative">
          <Image src={secondPic} alt="" width={800} height={500} />
          <div className="absolute bottom-0 w-full bg-black bg-opacity-50 text-white p-4">
            <div className="uppercase tracking-wide text-sm text-white-700 font-semibold">
              Adukasyon Website
            </div>
            <p className="mt-2 text-gray-100">
              This website was created with next js and tailwind css.
            </p>
          </div>
        </div>
      </div>

      {/* Third Project */}
      <div className="max-w-xl mx-auto bg-white rounded-xl shadow-md overflow-hidden transform transition-transform hover:scale-105 animate-fade-in">
        <div className="relative">
          <Image src={thirdPic} alt="" width={800} height={500} />
          <div className="absolute bottom-0 w-full bg-black bg-opacity-50 text-white p-4">
            <div className="uppercase tracking-wide text-sm text-white-700 font-semibold">
              Community Builder Alliance Website
            </div>
            <p className="mt-2 text-gray-100">
              This project was built with laravel and front-end html/css.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
