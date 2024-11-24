import React from 'react';
import { Link } from 'react-router-dom';

const Navbar: React.FC = () => {
  return (
    <nav className="bg-blue-500 p-4">
      <ul className="flex space-x-4">
        <li>
          <Link to="/" className="text-white">Home</Link>
        </li>
        <li>
          <Link to="/adopt" className="text-white">Adopt</Link>
        </li>
        <li>
          <Link to="/shop" className="text-white">Shop</Link>
        </li>
        <li>
          <Link to="/blog" className="text-white">Blog</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;

