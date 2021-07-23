import './App.css';
import './css/front/app.scss';
// import { tns } from "tiny-slider"
import api from './services/api'
import React, { useState, useEffect } from 'react';
// import {tns} from './src/tiny-slider.js';
function App() {
  const [media, setMedia] = useState([]);
  // Similar to componentDidMount and componentDidUpdate:
  useEffect(() => {
    const ass = async () => {
      const apiMedia = await api.getMedia()
      setMedia(apiMedia)
    }
    ass()
  }, []);

  return (
    <div className="App">
    <slider></slider>
      <header className="App-header">
        {
          media.map((mediaItem, idx) => {
            return <div key={idx}>
              <h4>{mediaItem.title}</h4>
              <img width="100" src={mediaItem.url} alt={mediaItem.id}/>
            </div>
          })
        }
      </header>
    </div>
  );
}

export default App;
