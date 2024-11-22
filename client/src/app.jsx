// src/App.js
import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';

const App = () => {
  return (
    <div className="app-container">
      <Header />
      <main>
        <section>
          <h1>Welcome to My React App</h1>
          <p>This is a simple and clean layout built with React.</p>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default App;
