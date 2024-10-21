import React, { useState } from 'react';
import { FaUserAlt, FaCode, FaLaptopCode, FaFileDownload } from 'react-icons/fa';

const About = () => {
  const [resume, setResume] = useState(null);
  const [resumeURL, setResumeURL] = useState('');

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      setResume(file);
      const url = URL.createObjectURL(file);
      setResumeURL(url);
    }
  };

  return (
    <div className="relative text-white py-20" 
         style={{ backgroundImage: "linear-gradient(to right, #4A5568, #2D3748)" }}>
      
      <div className="absolute inset-0 bg-black bg-opacity-50"></div>
      
      <div className="relative z-10 max-w-5xl mx-auto text-center px-4">
        <h2 className="text-5xl md:text-7xl font-bold mb-6 animate-fade-in-up text-shadow">
          About Me
        </h2>
        <p className="text-lg md:text-2xl mb-8 animate-fade-in-up delay-200">
          I’m Gautam, a passionate MERN stack developer.
        </p>
        
        <div className="flex flex-col md:flex-row justify-center items-center space-y-8 md:space-y-0 md:space-x-6">
          <div className="bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg p-6 shadow-2xl transform transition-transform hover:scale-105 hover:shadow-3xl animate-fade-in-up delay-300">
            <FaUserAlt className="text-white text-5xl mb-4 transition-transform duration-200 transform hover:rotate-12 hover:animate-bounce" />
            <h3 className="text-2xl font-semibold underline">Who I Am</h3>
            <p className="mt-2">
              A dedicated developer with a love for creating innovative solutions. I thrive in dynamic environments and enjoy tackling challenges head-on.
            </p>
          </div>
          <div className="bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg p-6 shadow-2xl transform transition-transform hover:scale-105 hover:shadow-3xl animate-fade-in-up delay-400">
            <FaCode className="text-white text-5xl mb-4 transition-transform duration-200 transform hover:rotate-12 hover:animate-bounce" />
            <h3 className="text-2xl font-semibold underline">What I Do</h3>
            <p className="mt-2">
              Specializing in full-stack development, I build responsive web applications that are both user-friendly and efficient.
            </p>
          </div>
          
          {/* Card 3 */}
          <div className="bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg p-6 shadow-2xl transform transition-transform hover:scale-105 hover:shadow-3xl animate-fade-in-up delay-500">
            <FaLaptopCode className="text-white text-5xl mb-4 transition-transform duration-200 transform hover:rotate-12 hover:animate-bounce" />
            <h3 className="text-2xl font-semibold underline">My Skills</h3>
            <p className="mt-2">
              Proficient in JavaScript, React, Node.js, and MongoDB. I am constantly learning and adapting to new technologies.
            </p>
          </div>
        </div>

        <p className="text-md md:text-xl mt-12 animate-fade-in-up delay-600">
          When I'm not coding, you can find me exploring new technologies, reading tech blogs, or working on personal projects to improve my skills.
        </p>

        <div className="mt-12">
          <h3 className="text-3xl font-semibold mb-4">Upload Your Resume</h3>
          <input
            type="file"
            accept=".pdf,.doc,.docx"
            onChange={handleFileChange}
            className="mb-4 bg-white text-gray-800 p-2 rounded border border-gray-300"
          />
          {resume && (
            <div className="mt-4">
              <p className="text-lg">Uploaded Resume: {resume.name}</p>
              <a
                href={resumeURL}
                download={resume.name}
                className="flex items-center mt-2 bg-blue-600 text-white py-2 px-4 rounded-full hover:bg-blue-700 transition duration-300"
              >
                <FaFileDownload className="mr-2" />
                Download Resume
              </a>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default About;