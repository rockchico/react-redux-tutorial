import React from 'react';
import { connect } from 'react-redux';
import { getFetchError } from '../selectors/messageSelector';

import './Messages.css';
import Message from './Message';

const COLUMNS = {
    id: {
      label: 'ID',
      width: '10%',
    },
    message: {
      label: 'Message',
      width: '40%',
    },
    author: {
      label: 'Author',
      width: '30%',
    }
};

const Messages = ({ messages, error }) =>
  
  

  <div className="stories">
    <div className="stories-header">
      {Object.keys(COLUMNS).map(key =>
        <span
          key={key}
          style={{ width: COLUMNS[key].width }}
        >
          {COLUMNS[key].label}
        </span>
      )}
    </div>

    { error && <p className="error">Something went wrong ...</p> }

    {(messages || []).map(message =>
      <Message
        key={message.id}
        message={message}
        columns={COLUMNS}
      />
    )}
  </div>

const mapStateToProps = state => ({
  messages: state.messageState.messages,
  error: getFetchError(state),
});

export default connect(
  mapStateToProps
)(Messages);