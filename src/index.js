import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App';
import store from './store';
import { getReadableStories } from './selectors/story';
import { STORY_ARCHIVE } from './constants/actionTypes';
import * as serviceWorker from './serviceWorker';

console.log("initial state storyState")
console.log(store.getState().storyState)

console.log("initial state archiveState")
console.log(store.getState().archiveState)

function render() {
    
  ReactDOM.render(
    <App 
      stories={ getReadableStories(store.getState().storyState, store.getState().archiveState) }
      onArchive={id => {
        store.dispatch({ type: STORY_ARCHIVE, id })
        console.log(store.getState().storyState)
        console.log(store.getState().archiveState)
      }}
    />,
    document.getElementById('root')
  )
}

store.subscribe(render);
render();

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
