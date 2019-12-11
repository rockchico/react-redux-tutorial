import { takeEvery, all } from 'redux-saga/effects';
import { STORIES_FETCH, MESSAGE_API_ADD, MESSAGE_API_FETCHALL } from '../constants/actionTypes';
import { handleFetchStories } from './story';
import { handleFetchAllMessages } from './messageSaga';

function *watchAll() {
  yield all([
    takeEvery(STORIES_FETCH, handleFetchStories),
    takeEvery(MESSAGE_API_FETCHALL, handleFetchAllMessages),
  ])

}
export default watchAll;