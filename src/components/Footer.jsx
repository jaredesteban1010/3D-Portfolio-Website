import React from 'react';
import { FaGithub, FaInstagram, FaLinkedin } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-6">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between">

        {/* Links */}
        <div className="flex space-x-6">
          <a href="https://github.com/jaredesteban1010" target="_blank" rel="noopener noreferrer" className="hover:text-gray-400">
            <FaGithub size={30} />
          </a>
        </div>

        {/* Extra Footer Content */}
        <div className="text-sm text-center md:text-right">
          <p>&copy; {new Date().getFullYear()}. All rights reserved.</p>
          <p>
            Built with ❤️ by <a href="#" className="hover:underline">Jared Esteban Cruz Perez</a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
