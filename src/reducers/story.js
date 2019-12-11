import { STORIES_ADD, STORIES_FETCH_ERROR, STORY_ADD } from '../constants/actionTypes';

const INITIAL_STATE = {
  stories: [],
  error: null,
};

const applyAddStories = (state, action) => ({
  stories: action.stories,
  error: null,
});

const applyFetchErrorStories = (state, action) => ({
  stories: [],
  error: action.error,
});


const addStory = (state, action) => ({
  stories: state.stories.concat([action.story]),
  error: null,
});

function storyReducer(state = INITIAL_STATE, action) {
    switch(action.type) {
      
      case STORIES_ADD : {
        return applyAddStories(state, action);
      }

      case STORIES_FETCH_ERROR : {
        return applyFetchErrorStories(state, action);
      }

      case STORY_ADD : {
        var int = parseInt((Math.random() * 100), 10)
        return addStory(state, action)
      }
      
      default : return state;
    }
}

export default storyReducer;