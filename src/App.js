import './App.css';

import api from './services/api'
import React, { useState, useEffect } from 'react';

function App() {
  const [media, setMedia] = useState([]);

  // Similar to componentDidMount and componentDidUpdate:
  useEffect(() => {
    const ass = async () => {
      const apiMedia = await api.getMedia()
      setMedia(apiMedia)
    }
    ass()
  }, [])

  return (
    <div className="App">
      <header className="App-header">
        {
          media.map((mediaItem, idx) => {
            return <div key={idx}>
              <h4>{mediaItem.title}</h4>
              <img width="100" src={mediaItem.url}/>
            </div>
          })
        }
      </header>
    </div>
  );
}

export default App;
