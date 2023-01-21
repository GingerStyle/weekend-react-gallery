import React from 'react';
import { useState, useEffect } from 'react';
import { HashRouter as Router, Route, Link} from 'react-router-dom';
import './App.css';
import GalleryList from '../GalleryList/GalleryList.jsx';
import GalleryItem from '../GalleryItem/GalleryItem.jsx';
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
      <Router>
        <div className="App">
          <header className="App-header">
            <h1 className="App-title">Gallery of My Life</h1>
            <ul>
              <li>
                <Link to='/'>Home</Link>
              </li>
            </ul>
          </header>
          <GalleryList galleryProp={gallery}/>
          <Route path='/' exact>
            <GalleryList />
          </Route>
          <Route path='/GalleryItem'>
            <GalleryItem />
          </Route>
        </div>
      </Router>
    );
}

export default App;
