import React from 'react';
import './App.css';


import Messages from './Messages';
import LoadMessages from './LoadMessages';
import AddMessages from './AddMessages';






const App = () =>
  <div className="app">
    <div className="interactions">
      <LoadMessages />
      <AddMessages />
    </div>
    <Messages />
  </div>

  
export default App;