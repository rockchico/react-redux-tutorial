import { takeEvery, all } from 'redux-saga/effects';
import { STORIES_FETCH, MESSAGE_API_FETCHALL, MESSAGE_API_DELETE } from '../constants/actionTypes';
import { handleFetchStories } from './story';
import { handleFetchAllMessages, handleDeleteMessage } from './messageSaga';

function *watchAll() {
  yield all([
    takeEvery(STORIES_FETCH, handleFetchStories),
    takeEvery(MESSAGE_API_FETCHALL, handleFetchAllMessages),
    takeEvery(MESSAGE_API_DELETE, handleDeleteMessage),
  ])

}
export default watchAll;