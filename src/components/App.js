import React from 'react';
import './App.css';
import SearchStories from './SearchStories';
import AddStory from './AddStory';
import Messages from './Messages';



const App = () =>
  <div className="app">
    <div className="interactions">
      <AddStory />
      <SearchStories />
    </div>
    <Messages />
  </div>

  
export default App;