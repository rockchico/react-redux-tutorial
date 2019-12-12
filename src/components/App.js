import React from 'react';
import './App.css';


import Messages from './Messages';
import LoadMessages from './LoadMessages';



const App = () =>
  <div className="app">
    <div className="interactions">
      <LoadMessages />
    </div>
    <Messages />
  </div>

  
export default App;