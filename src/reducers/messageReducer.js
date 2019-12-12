import * as ACTIONS from '../constants/actionTypes';

const INITIAL_STATE = {
  messages: [],
  error: null,
};

const applyFetchAllMessages = (state, action) => ({
  messages: action.messages,
  error: null,
});

const applyFetchAllMessagesError = (state, action) => ({
  messages: [],
  error: action.error,
});


const applyAddMessage = (state, action) => ({
  messages: state.messages.concat([action.message]),
  error: null,
});

const applyAddMessageError = (state, action) => ({
  messages: state.messages,
  error: action.error,
});


const applyDelMessage = (state, action) => ({
  messages: state.messages.filter(message => message.id !== action.message.id),
  error: null,
});

const applyDelMessageError = (state, action) => ({
  messages: state.messages,
  error: action.error,
});



function messageReducer(state = INITIAL_STATE, action) {
    switch(action.type) {
      
      case ACTIONS.MESSAGE_FETCHALL : {
        //console.log(action)
        return applyFetchAllMessages(state, action);
      }

      case ACTIONS.MESSAGE_API_FETCHALL_ERROR : {
        return applyFetchAllMessagesError(state, action);
      }

      case ACTIONS.MESSAGE_ADD : {
        return applyAddMessage(state, action)
      }

      case ACTIONS.MESSAGE_API_ADD_ERROR : {
        return applyAddMessageError(state, action)
      }

      case ACTIONS.MESSAGE_DELETE : {
        //console.log(action)
        return applyDelMessage(state, action)
      }

      case ACTIONS.MESSAGE_API_DELETE_ERROR : {
        return applyDelMessageError(state, action)
      }
      
      default : return state;
    }
}

export default messageReducer;