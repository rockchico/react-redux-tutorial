import { combineReducers } from 'redux';
import storyReducer from './story';
import archiveReducer from './archive';
import messageReducer from './messageReducer';

const rootReducer = combineReducers({
  storyState: storyReducer,
  archiveState: archiveReducer,
  messageState: messageReducer
});

export default rootReducer;