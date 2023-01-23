import React from 'react';
import { useState, useEffect } from 'react';
import './App.css';
import GalleryList from '../GalleryList/GalleryList.jsx';
import Axios from 'axios';


function App() {
  const [gallery, setGallery] = useState([]);

  const getItemList = () => {
    Axios.get('/gallery')
    .then((response) => {
      console.log('response from GET command', response);
      setGallery(response.data);
    }).catch((error) => {
      console.log('error getting data from server', error);
    });
    console.log('gallery contains:', gallery);
  };

  useEffect(() => {
    getItemList();
  }, []);

    return (
        <div className="App">
          <header className="App-header">
            <h1 className="App-title">Gallery of My Life</h1>
          </header>
          <GalleryList galleryProp={gallery} getItemsProp={getItemList}/>
        </div>
    );
}

export default App;
