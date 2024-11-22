// src/pages/Home.jsx
import React from 'react';
import { Link } from 'react-router-dom';  // For navigation

const Home = () => {
  return (
    <div className="home-container">
      {/* Hero Section */}
      <section className="hero">
        <h1>Welcome to Pet Haven!</h1>
        <p>Your one-stop destination for adopting pets, reading our blog, and shopping for pet supplies.</p>
        <Link to="/adopt" className="cta-btn">Adopt a Pet</Link>
      </section>

      {/* Pet Adoption Section */}
      <section className="pet-adoption">
        <h2>Adopt a Pet</h2>
        <p>Find your perfect furry friend! Explore our adoptable pets and bring home a new companion today.</p>
        <Link to="/adopt" className="cta-btn">Browse Adoptable Pets</Link>
      </section>

      {/* Blog Section */}
      <section className="blog">
        <h2>Our Blog</h2>
        <p>Stay informed about pet care, adoption tips, and fun pet stories. Check out our latest blog posts!</p>
        <Link to="/blog" className="cta-btn">Visit Blog</Link>
      </section>

      {/* Pet Shop Section */}
      <section className="pet-shop">
        <h2>Shop for Pet Supplies</h2>
        <p>Browse our selection of pet products, from food to toys and accessories, to pamper your pets.</p>
        <Link to="/shop" className="cta-btn">Start Shopping</Link>
      </section>

      {/* Footer */}
      <footer className="footer">
        <p>Pet Haven © 2024. All rights reserved.</p>
        <nav>
          <ul>
            <li><Link to="/about">About Us</Link></li>
            <li><Link to="/contact">Contact</Link></li>
            <li><Link to="/privacy">Privacy Policy</Link></li>
          </ul>
        </nav>
      </footer>
    </div>
  );
};

export default Home;

