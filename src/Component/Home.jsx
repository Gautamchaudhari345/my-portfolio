import React from 'react'; 
import { Link } from 'react-scroll';
import { FaArrowDown } from 'react-icons/fa';

const Home = () => {
  const photoURL = '/Asset/photo.jpeg'; 
  return (
    <div className="relative h-screen bg-gradient-to-br from-purple-600 to-blue-500 flex flex-col items-center justify-center text-white">
      {/* Background */}
      <div
        className="absolute inset-0 bg-cover bg-center opacity-30"
        style={{
          backgroundImage: 'url(https://img.freepik.com/free-vector/pink-neon-synthwave-patterned-social-story-template-vector_53876-176443.jpg?t=st=1729360512~exp=1729364112~hmac=fb3253a0af49bdf39cee9e68b4affe902b16450b86c5c68fc64ebb322a943ab4&w=360)',
        }}
      ></div>

      <div className="absolute inset-0 bg-black bg-opacity-60"></div>

      {/* Main Content */}
      <div className="relative z-10 text-center px-4 md:px-8 max-w-4xl">
        <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-fade-in-up">
          Welcome, I'm <span className="text-yellow-400 animate-pulse">Gautam</span>
        </h1>
        <p className="text-lg md:text-2xl mb-8 animate-fade-in-up delay-200">
          A passionate MERN stack developer focused on creating elegant web solutions.
        </p>

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

      {/* About Me Section */}
      <section className="relative z-10 text-center bg-gradient-to-br from-blue-500 to-purple-600 py-16 px-4 md:px-8">
        <h2 className="text-4xl md:text-5xl font-bold mb-6">About Me</h2>
        <p className="text-lg md:text-xl mb-8 max-w-3xl mx-auto">
          I'm a full-stack developer specializing in building high-quality web applications. With a strong foundation in the MERN stack, I aim to deliver scalable and visually appealing solutions tailored to meet user needs.
        </p>
      </section>

      {/* Skills Section */}
      <section className="relative z-10 text-center bg-gradient-to-br from-purple-600 to-blue-500 py-16 px-4 md:px-8">
        <h2 className="text-4xl md:text-5xl font-bold mb-6">My Skills</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
          <div className="p-4 bg-white text-black rounded-lg shadow-md">HTML</div>
          <div className="p-4 bg-white text-black rounded-lg shadow-md">CSS</div>
          <div className="p-4 bg-white text-black rounded-lg shadow-md">JavaScript</div>
          <div className="p-4 bg-white text-black rounded-lg shadow-md">React</div>
          <div className="p-4 bg-white text-black rounded-lg shadow-md">Node.js</div>
          <div className="p-4 bg-white text-black rounded-lg shadow-md">Express</div>
          <div className="p-4 bg-white text-black rounded-lg shadow-md">MongoDB</div>
          <div className="p-4 bg-white text-black rounded-lg shadow-md">Tailwind CSS</div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="relative z-10 text-center bg-gradient-to-br from-blue-500 to-purple-600 py-16 px-4 md:px-8">
        <h2 className="text-4xl md:text-5xl font-bold mb-6">Let's Build Something Together</h2>
        <p className="text-lg md:text-xl mb-8 max-w-3xl mx-auto">
          Whether you have a project in mind or just want to connect, feel free to reach out. Let's collaborate to create something amazing!
        </p>
        <a
          href="/contact"
          className="bg-yellow-400 hover:bg-yellow-500 text-black font-semibold py-3 px-8 rounded-full shadow-lg transform hover:scale-110 transition duration-300"
        >
          Get in Touch
        </a>
      </section>
    </div>
  );
};

export default Home;
