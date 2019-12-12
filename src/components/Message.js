import React from 'react';
import { connect } from 'react-redux';
import { doArchiveStory } from '../actions/archive';

import './Message.css';

const Message = ({ message, columns }) => {
  
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
      
    </div>
  );
}

//const mapDispatchToProps = dispatch => ({
//  onArchive: id => dispatch(doArchiveStory(id)),
//});
//export default connect(
//  null,
//  mapDispatchToProps
//)(Story);

export default Message;