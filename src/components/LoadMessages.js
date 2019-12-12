import React, { Component } from 'react';
import { connect } from 'react-redux';

import { doFetchAllMessagesApi } from '../actions/messageActions';
//import Button from './Button';

class LoadMessages extends Component {

  handleClickLoadMessages = event => {
    
    this.props.onLoadMessages()

  }

  render() {
    return (
      <div>
        <button type="button" onClick={this.handleClickLoadMessages}>
          Load messages
        </button>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
    onLoadMessages: () => dispatch(doFetchAllMessagesApi())
});
export default connect(
    null,
    mapDispatchToProps
)(LoadMessages);