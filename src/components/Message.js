import React from 'react';
import { connect } from 'react-redux';
import { doArchiveStory } from '../actions/archive';

import './Message.css';

const Story = ({ message_elm, columns }) => {
  const {
    id,
    author,
    message,
  } = message_elm;
  return (
    <div className="story">
      <span style={{ width: columns.id.width }}>
        {id}
      </span>
      <span style={{ width: columns.author.width }}>
        {author}
      </span>
      <span style={{ width: columns.message.width }}>
        {message}
      </span>
      
    </div>
  );
}

const mapDispatchToProps = dispatch => ({
  onArchive: id => dispatch(doArchiveStory(id)),
});
export default connect(
  null,
  mapDispatchToProps
)(Story);