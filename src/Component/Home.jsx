import React from 'react'; 
import { Link } from 'react-scroll';
import { FaArrowDown } from 'react-icons/fa';

const Home = () => {
  const photoURL = '/Asset/photo.jpeg'; 
  return (
    <div className="relative h-screen bg-gradient-to-br from-purple-600 to-blue-500 flex items-center justify-center text-white">
      
      <div
        className="absolute inset-0 bg-cover bg-center opacity-30"
        style={{
          backgroundImage: 'url(https://img.freepik.com/free-vector/pink-neon-synthwave-patterned-social-story-template-vector_53876-176443.jpg?t=st=1729360512~exp=1729364112~hmac=fb3253a0af49bdf39cee9e68b4affe902b16450b86c5c68fc64ebb322a943ab4&w=360)',
        }}
      ></div>

      <div className="absolute inset-0 bg-black bg-opacity-60"></div>

      <div className="relative z-10 text-center px-4 md:px-8 max-w-4xl">
        <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-fade-in-up">
          Welcome, I'm <span className="text-yellow-400 animate-pulse">Gautam</span>
        </h1>
        <p className="text-lg md:text-2xl mb-8 animate-fade-in-up delay-200">
          A passionate MERN stack developer focused on creating elegant web solutions.
        </p>

        {/* Add your photo here */}
        <img
          src={photoURL}
          alt="Gautam"
          className="mx-auto mb-6 rounded-full w-40 h-40 object-cover border-4 border-yellow-400 shadow-lg"
        />

        <div className="flex flex-col md:flex-row justify-center items-center space-y-4 md:space-y-0 md:space-x-6 animate-fade-in-up delay-400">
          <a
            href="/projects"
            className="bg-yellow-400 hover:bg-yellow-500 text-black font-semibold py-3 px-8 rounded-full shadow-lg transform hover:scale-110 transition duration-300"
          >
            View My Projects
          </a>
          <a
            href="/contact"
            className="bg-transparent border-2 border-white hover:bg-white hover:text-blue-600 text-white font-semibold py-3 px-8 rounded-full shadow-lg transform hover:scale-110 transition duration-300"
          >
            Contact Me
          </a>
        </div>

        <div className="mt-16 animate-bounce">
          <FaArrowDown className="text-3xl text-yellow-400" />
        </div>
      </div>
    </div>
  );
};

export default Home;
