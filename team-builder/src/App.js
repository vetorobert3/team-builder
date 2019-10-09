import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';

function App() {

  const [name, setName] = useState();

  return (
    <div className="App">
      <form>
        <label>
          name: <input />
        </label>
      </form>
    </div>
  );
}

export default App;
