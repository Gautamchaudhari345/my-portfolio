import React from 'react';
import { Link } from 'react-router-dom';
import { FaBars, FaTimes } from 'react-icons/fa';

const Navbar = () => {
  const [isOpen, setIsOpen] = React.useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="fixed top-0 left-0 w-full bg-white shadow-lg z-50">
      <div className="max-w-6xl mx-auto flex justify-between items-center p-4">
        <div className="text-2xl font-bold text-blue-500">My Portfolio</div>

        <div className="hidden md:flex space-x-8">
          <Link to="/" className="nav-link">Home</Link>
          <Link to="/about" className="nav-link">About</Link>
          <Link to="/projects" className="nav-link">Projects</Link>
          <Link to="/skills" className="nav-link">Skills</Link>
          <Link to="/contact" className="nav-link">Contact</Link>
          <Link to="/education" className="nav-link">Education</Link>
        </div>

        <div className="md:hidden">
          <button onClick={toggleMenu} className="text-blue-500 focus:outline-none">
            {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
          </button>
        </div>
      </div>

     
      {isOpen && (
        <div className="md:hidden bg-white shadow-md">
          <div className="flex flex-col items-center space-y-4 p-4">
            <Link to="/" className="nav-link" onClick={toggleMenu}>Home</Link>
            <Link to="/about" className="nav-link" onClick={toggleMenu}>About</Link>
            <Link to="/projects" className="nav-link" onClick={toggleMenu}>Projects</Link>
            <Link to="/skills" className="nav-link" onClick={toggleMenu}>Skills</Link>
            <Link to="/contact" className="nav-link" onClick={toggleMenu}>Contact</Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
