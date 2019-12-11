import * as ACTIONS from '../constants/actionTypes';

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

export {
    doFetchAllMessagesApi,
    doFetchAllMessages,
    doFetchAllMessagesApiError,

    doAddMessageApi,
    doAddMessage,
    doAddMessageApiError
};