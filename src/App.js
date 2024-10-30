import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import About from './About';
import Contact from './Component/Contact';
import Home from './Component/Home';
import Navbar from './Component/Navbar';
import Projects from './Component/Projects';
import Skills from './Skills';
import './index.css';
import Education from './Component/Education';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/skills" element={<Skills />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/education" element={<Education />} />
      </Routes>
    </Router>
  );
}

export default App;
