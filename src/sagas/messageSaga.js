import { call, put } from 'redux-saga/effects';
import { 

  
  doFetchAllMessages,
  doFetchAllMessagesApiError,

  doAddMessage,
  doAddMessageApiError,

  doDelMessage,
  doDelMessageApiError



 } from '../actions/messageActions';

import uuid from '../utils/uuid'

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

function* handleDeleteMessage(action) {
  
  const { message } = action;

  console.log("handleDeleteMessage")
  //console.log(message)
  
  try {
    const result = yield call(ApiDeleteMessage, message);
    //console.log(result)
    yield put(doDelMessage(message));
  } catch (error) {
    yield put(doDelMessageApiError(error));
  }

}

function* handleAddMessage(action) {
  
  const { message } = action;
  //message.id = uuid();

  console.log("handleAddMessage")
  //console.log(message)
  
  try {
    const result = yield call(ApiAddMessage, message);
    //console.log(result)
    message.id = result.id;
    yield put(doAddMessage(message));
  } catch (error) {
    yield put(doDelMessageApiError(error));
  }

}


export {
  handleFetchAllMessages,
  handleDeleteMessage,
  handleAddMessage
};