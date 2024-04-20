import React, { useState } from 'react';
import './App.css'; // Import the CSS file if you want to apply custom styles

function App() {
  const [inputValue, setInputValue] = useState('');

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleAnalyzeImage = () => {
    // This function will be called when the "Analyze Image" button is clicked
    // You can add your logic for image analysis here
    console.log('Analyze Image:', inputValue);
  };

  const handleGenerateImage = () => {
    // This function will be called when the "Generate Image" button is clicked
    // You can add your logic for image generation here
    console.log('Generate Image:', inputValue);
  };

  return (
    <div className="App">
      <h1>Image Analysis and Generation</h1>
      <div>
        <input
          type="text"
          value={inputValue}
          onChange={handleInputChange}
          placeholder="Enter image URL or prompt"
        />
      </div>
      <div>
        <button onClick={handleAnalyzeImage}>Analyze Image</button>
        <button onClick={handleGenerateImage}>Generate Image</button>
      </div>
    </div>
  );
}

export default App;