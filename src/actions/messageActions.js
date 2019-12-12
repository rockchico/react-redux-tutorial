import * as ACTIONS from '../constants/actionTypes';


// Fetch All **********************
const doFetchAllMessagesApi = () => ({
    type: ACTIONS.MESSAGE_API_FETCHALL
});

const doFetchAllMessages = messages => ({
    type: ACTIONS.MESSAGE_FETCHALL,
    messages,
});

const doFetchAllMessagesApiError = error => ({
    type: ACTIONS.MESSAGE_API_FETCHALL_ERROR,
    error,
});
// Fim Fetch All **********************

// Add **********************
const doAddMessageApi = (message) => ({
    type: ACTIONS.MESSAGE_API_ADD,
    message
});

const doAddMessage = (message) => ({
    type: ACTIONS.MESSAGE_ADD,
    message
});

const doAddMessageApiError = error => ({
    type: ACTIONS.MESSAGE_API_ADD_ERROR,
    error,
});
// Fim Add **********************

// Del **********************
const doDelMessageApi = (message) => ({
    type: ACTIONS.MESSAGE_API_DELETE,
    message
});

const doDelMessage = (message) => ({
    type: ACTIONS.MESSAGE_DELETE,
    message
});

const doDelMessageApiError = error => ({
    type: ACTIONS.MESSAGE_API_DELETE_ERROR,
    error,
});
// Fim Del **********************






export {
    doFetchAllMessagesApi,
    doFetchAllMessages,
    doFetchAllMessagesApiError,

    doAddMessageApi,
    doAddMessage,
    doAddMessageApiError,

    doDelMessageApi,
    doDelMessage,
    doDelMessageApiError

};