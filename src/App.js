import React, { useState } from 'react';
import './App.css';

function App() {
  const [input, setInput] = useState('');
  const [result, setResult] = useState(0);

  const handleButtonClick = (value) => {
    if (value === '=') {
      try {
        setResult(eval(input));
      } catch (error) {
        setResult('Error');
      }
    } else if (value === 'C') {
      setInput('');
      setResult(0);
    } else {
      setInput((prevInput) => prevInput + value);
    }
  };

  return (
    <div className="App">
      <h1>Simple Calculator</h1>
      <div className="calculator">
        <div className="input">
          <input type="text" value={input} readOnly />
        </div>
        <div className="buttons">
          <div className="row">
            {[7, 8, 9, '/'].map((value, index) => (
              <button
                key={index}
                onClick={() => handleButtonClick(value)}
                className="digit"
              >
                {value}
              </button>
            ))}
          </div>
          <div className="row">
            {[4, 5, 6, '*'].map((value, index) => (
              <button
                key={index}
                onClick={() => handleButtonClick(value)}
                className="digit"
              >
                {value}
              </button>
            ))}
          </div>
          <div className="row">
            {[1, 2, 3, '-'].map((value, index) => (
              <button
                key={index}
                onClick={() => handleButtonClick(value)}
                className="digit"
              >
                {value}
              </button>
            ))}
          </div>
          <div className="row">
            {['C', 0, '=', '+'].map((value, index) => (
              <button
                key={index}
                onClick={() => handleButtonClick(value)}
                className={`operator ${value}`}
              >
                {value}
              </button>
            ))}
          </div>
        </div>
        <div className="result">
          <p>Result: {result}</p>
        </div>
      </div>
    </div>
  );
}

export default App;