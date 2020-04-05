import React from 'react';
import './App.css';

const api = {
  key:"f3a6c97340407d168682f681c1093154",
  base: "api.openweathermap.org/data/2.5/"
}

function App() {
  return (
    <div className="App">
      <main>
        <div className="search-box">
          <input
            type="text"
            className="search-bar"
            placeholder="Search..."
          />
        </div>
      
      </main>
    </div>
  );
}

export default App;
