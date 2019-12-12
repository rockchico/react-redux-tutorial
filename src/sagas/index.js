import { takeEvery, all } from 'redux-saga/effects';
import { MESSAGE_API_FETCHALL, MESSAGE_API_DELETE, MESSAGE_API_ADD } from '../constants/actionTypes';
import { handleFetchAllMessages, handleDeleteMessage, handleAddMessage } from './messageSaga';

function *watchAll() {
  yield all([
    takeEvery(MESSAGE_API_FETCHALL, handleFetchAllMessages),
    takeEvery(MESSAGE_API_DELETE, handleDeleteMessage),
    takeEvery(MESSAGE_API_ADD, handleAddMessage),
  ])

}
export default watchAll;