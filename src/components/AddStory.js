import React, { Component } from 'react';
import { connect } from 'react-redux';
import { doAddStory } from '../actions/story';
//import Button from './Button';

class AddStory extends Component {

  handleClickAddStory = event => {
    
    let int = parseInt((Math.random() * 100), 10)
    this.props.onAddStory(int)

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
    onAddStory: (id) => dispatch(doAddStory(id))
});
export default connect(
    null,
    mapDispatchToProps
)(AddStory);