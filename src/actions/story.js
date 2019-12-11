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


const doAddStory = (id) => ({
    type: STORY_ADD,
    story: {
        title: 'React Francisco',
        url: 'https://facebook.github.io/react/',
        author: 'Francisco',
        num_comments: 3,
        points: 4,
        objectID: id,
    },
});

export {
    doAddStories,
    doFetchStories,
    doFetchErrorStories,
    doAddStory
};