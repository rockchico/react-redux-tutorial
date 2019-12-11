import {
    STORIES_ADD,
    STORIES_FETCH,
    STORIES_FETCH_ERROR,
    STORY_ADD
  } from '../constants/actionTypes';

const doAddStories = stories => ({
    type: STORIES_ADD,
    stories,
});

const doFetchStories = query => ({
    type: STORIES_FETCH,
    query,
});

const doFetchErrorStories = error => ({
    type: STORIES_FETCH_ERROR,
    error,
});


const addStory = ({
    type: STORY_ADD,
    story: {
        title: 'React Francisco',
        url: 'https://facebook.github.io/react/',
        author: 'Francisco',
        num_comments: 3,
        points: 4,
        objectID: 0,
    },
});

export {
    doAddStories,
    doFetchStories,
    doFetchErrorStories,
    addStory
};