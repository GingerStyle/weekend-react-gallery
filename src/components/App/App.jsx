import React from 'react';
import { HashRouter as Router, Route, Link, useHistory} from 'react-router-dom';
import './App.css';
import GalleryList from '../GalleryList/GalleryList.jsx';
import GalleryItem from '../GalleryItem/GalleryItem.jsx';


function App() {
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
          <p>Gallery goes here</p>
          <img src="images/goat_small.jpg"/>
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
