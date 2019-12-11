import { call, put } from 'redux-saga/effects';
import { 

  
  doFetchAllMessages,
  doFetchAllMessagesApiError,

  doAddMessage,
  doAddMessageApiError

 } from '../actions/messageActions';

import {
  ApiAddMessage,
  ApiUpdateMessage,
  ApiDeleteMessage,
  ApiFetchAllMessages
} from '../api/messagesApi';


function* handleFetchAllMessages(action) {
  
  //const { query } = action;

  console.log("handleFetchAllMessages")
  
  try {
    const result = yield call(ApiFetchAllMessages);
    yield put(doFetchAllMessages(result));
  } catch (error) {
    yield put(doFetchAllMessagesApiError(error));
  }

}


export {
  handleFetchAllMessages,
};