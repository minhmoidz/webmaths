import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

function App() {
  const [showContent, setShowContent] = useState(false);

  const handleClick = () => {
    setShowContent(true);
  };

  const handleBack = () => {
    setShowContent(false);
  };

  return (
    <div className="app-container d-flex justify-content-center align-items-center">
      <div className="container-fluid">
        <div className="row justify-content-center">
          <div className="col-md-8 col-lg-6 bg-dark text-white p-4 rounded">
            {!showContent ? (
              <div className="left-section text-center" onClick={handleClick}>
                <h1>Math Web</h1>
                <p>Explore the beauty of mathematics through interactive visualizations and engaging content.</p>
              </div>
            ) : (
              <div className="content-section">
                <button className="btn btn-warning mb-4" onClick={handleBack}>Back</button>
                <div className="row">
                  <div className="col-md-6 mb-3">
                    <div className="equation-container p-3 bg-secondary rounded">
                      <h2>Mathematical Formulas</h2>
                      <ul className="list-unstyled">
                        <li>Pythagorean Theorem: a² + b² = c²</li>
                        <li>Quadratic Formula: x = (-b ± √(b² - 4ac)) / 2a</li>
                        <li>Euler's Identity: e^(iπ) + 1 = 0</li>
                        <li>Area of a Circle: A = πr²</li>
                        <li>Derivative of e^x: d/dx(e^x) = e^x</li>
                      </ul>
                    </div>
                  </div>
                  <div className="col-md-6 mb-3">
                    <div className="famous-works p-3 bg-secondary rounded">
                      <h2>Famous Mathematical Works</h2>
                      <ul className="list-unstyled">
                        <li>Euclid's Elements</li>
                        <li>Isaac Newton's Principia Mathematica</li>
                        <li>Carl Friedrich Gauss's Disquisitiones Arithmeticae</li>
                        <li>Leonhard Euler's Introductio in analysin infinitorum</li>
                        <li>René Descartes' La Géométrie</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
