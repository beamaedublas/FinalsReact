import React, { useState } from 'react';


function App() {
  const [items, setItems] = useState([]);
  const [inputValue, setInputValue] = useState('');
  const [showList, setShowList] = useState(false);

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  const handleAddItem = () => {
    if (inputValue.trim() !== '') {
      setItems([...items, inputValue]);
      setInputValue('');
    }
  };

  const toggleList = () => {
    setShowList(!showList);
  };

  return (
    <div className="container">
      <h1>Conditional Display and Listing</h1>
      <input
        type="text"
        value={inputValue}
        onChange={handleInputChange}
        placeholder="Enter item..."
      />
      <button onClick={handleAddItem}>Add</button>
      <button onClick={toggleList}>
        {showList ? 'Hide List' : 'Show List'}
      </button>
      {showList && (
        <ul>
          {items.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default App;
