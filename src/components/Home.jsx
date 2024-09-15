import React from 'react';
import '../styles/Home.css';
import Sponsers from './Sponsers';
import Footer from './Footer';
import Gallery from './Gallery';
 
function Home() {
  return (
    <div>
      <div>
        <div className="home-container">
          <header className="hero-section">
            <h1>Welcome to Cricket Tournaments</h1>
            <h1>WickPlay.com</h1>
            <p>Join and compete in the most exciting cricket tournaments!</p>
            <div className="btns">
              <button className="cta-button">Register Now</button>
              <button className="cta-button">Login </button>
            </div>
          </header>
        </div>
 
      </div>

<Gallery/>

 <Sponsers/>


 <Footer/>


    </div>);
}

export default Home;
