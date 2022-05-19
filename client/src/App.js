import { useState } from 'react';
import Axios from 'axios';
import './App.css';

function App() {

  const [word, setWord] = useState('');
  const [translation, setTranslation] = useState('');

  const addToList = () => {
    Axios.post("http://localhost:3001/insert", {
      word: word,
      translation: translation,
    })
  };

  return (
    <div className="App">
      <h1>CRUD App with MERN</h1>

      <label>Word to translate</label>
      <input
        type="text"
        onChange={(event) => {
          setWord(event.target.value);
        }}
      />
      <label>Translation</label>
      <input
        type="text"
        onChange={(event) => {
          setTranslation(event.target.value);
        }}
      />
      <button onClick={addToList}>Add To List</button>
    </div>
  );
}

export default App;
