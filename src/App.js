import './App.css';
import { Routes, Route } from "react-router-dom";
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import Signup from './components/Signup';
import Signin from './components/Signin';
import Footer from './components/Footer';
import Logout from './components/Logout';
import Error from './components/Error';
import { useState } from 'react';

function App() {
  const [status, setStatus] = useState(false);
  return (
    <>
      <Navbar status={status} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/login" element={<Signin setStatus={setStatus} />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/logout" element={<Logout setStatus={setStatus} />} />
        <Route path='*' element={<Error />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
