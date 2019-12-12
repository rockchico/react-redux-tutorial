import React from 'react';
import { connect } from 'react-redux';
import { doDelMessageApi } from '../actions/messageActions';

import './Message.css';

const Message = ({ message, columns, onDeleteMessage }) => {
  
  //console.log(message_elm)
  
  const {
    id,
    author,
    text,
  } = message;


  

  return (
    <div className="story">
      <span style={{ width: columns.id.width }}>
        {id}
      </span>
      <span style={{ width: columns.author.width }}>
        {author}
      </span>
      <span style={{ width: columns.message.width }}>
        {text}
      </span>
      <span style={{ width: columns.del_action.width }}>
        <button
          type="button"
          className="button-inline"
          onClick={() => onDeleteMessage(message)}
        >
          Excluir
        </button>
      </span>
      
    </div>
  );
}

const mapDispatchToProps = dispatch => ({
  onDeleteMessage: message => dispatch(doDelMessageApi(message)),
});
export default connect(
  null,
  mapDispatchToProps
)(Message);

//export default Message;