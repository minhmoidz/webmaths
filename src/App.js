import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

function App() {
  const [input, setInput] = useState('');
  const [result, setResult] = useState('');

  const handleClick = (value) => {
    setInput((prev) => prev + value);
  };

  const handleClear = () => {
    setInput('');
    setResult('');
  };

  const handleCalculate = () => {
    try {
      setResult(eval(input));
    } catch (error) {
      setResult('Error');
    }
  };

  return (
    <div className="app-container d-flex justify-content-center align-items-center">
      <div className="calculator bg-dark text-white p-4 rounded">
        <h1 className="text-center mb-4">Calculator</h1>
        <div className="mb-3">
          <input
            type="text"
            className="form-control"
            value={input}
            readOnly
          />
        </div>
        <div className="mb-3">
          <input
            type="text"
            className="form-control"
            value={result}
            readOnly
            placeholder="Result"
          />
        </div>
        <div className="row">
          <div className="col">
            <button className="btn btn-secondary w-100 mb-2" onClick={() => handleClick('1')}>1</button>
          </div>
          <div className="col">
            <button className="btn btn-secondary w-100 mb-2" onClick={() => handleClick('2')}>2</button>
          </div>
          <div className="col">
            <button className="btn btn-secondary w-100 mb-2" onClick={() => handleClick('3')}>3</button>
          </div>
          <div className="col">
            <button className="btn btn-warning w-100 mb-2" onClick={() => handleClick('+')}>+</button>
          </div>
        </div>
        <div className="row">
          <div className="col">
            <button className="btn btn-secondary w-100 mb-2" onClick={() => handleClick('4')}>4</button>
          </div>
          <div className="col">
            <button className="btn btn-secondary w-100 mb-2" onClick={() => handleClick('5')}>5</button>
          </div>
          <div className="col">
            <button className="btn btn-secondary w-100 mb-2" onClick={() => handleClick('6')}>6</button>
          </div>
          <div className="col">
            <button className="btn btn-warning w-100 mb-2" onClick={() => handleClick('-')}>-</button>
          </div>
        </div>
        <div className="row">
          <div className="col">
            <button className="btn btn-secondary w-100 mb-2" onClick={() => handleClick('7')}>7</button>
          </div>
          <div className="col">
            <button className="btn btn-secondary w-100 mb-2" onClick={() => handleClick('8')}>8</button>
          </div>
          <div className="col">
            <button className="btn btn-secondary w-100 mb-2" onClick={() => handleClick('9')}>9</button>
          </div>
          <div className="col">
            <button className="btn btn-warning w-100 mb-2" onClick={() => handleClick('*')}>*</button>
          </div>
        </div>
        <div className="row">
          <div className="col">
            <button className="btn btn-secondary w-100 mb-2" onClick={() => handleClick('0')}>0</button>
          </div>
          <div className="col">
            <button className="btn btn-danger w-100 mb-2" onClick={handleClear}>C</button>
          </div>
          <div className="col">
            <button className="btn btn-success w-100 mb-2" onClick={handleCalculate}>=</button>
          </div>
          <div className="col">
            <button className="btn btn-warning w-100 mb-2" onClick={() => handleClick('/')}>/</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
