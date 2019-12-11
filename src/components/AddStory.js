import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addStory } from '../actions/story';
//import Button from './Button';

class AddStory extends Component {

  handleClickAddStory = event => {
    
    this.props.onAddStory()

  }

  render() {
    return (
      <div>
        <button type="button" onClick={this.handleClickAddStory}>
          Add Story
        </button>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
    onAddStory: () => dispatch(addStory)
});
export default connect(
    null,
    mapDispatchToProps
)(AddStory);