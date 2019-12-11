import React from 'react';
import './App.css';
import Stories from './Stories';
import SearchStories from './SearchStories';
import AddStory from './AddStory';



const App = () =>
  <div className="app">
    <div className="interactions">
      <AddStory />
      <SearchStories />
    </div>
    <Stories />
  </div>

  
export default App;