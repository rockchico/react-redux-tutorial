import React, { Component } from 'react';
import { connect } from 'react-redux';

import { doAddMessageApi } from '../actions/messageActions';
//import Button from './Button';

class AddMessages extends Component {

  constructor(props) {
    super(props);
    this.state = {
      text: '',
      author: '',
    };

  }

  onSubmit = event => {
    const { text, author } = this.state;
    
    if (text && author) {
      
    // console.log("opa")
      
      this.props.onAddMessages(this.state)
      this.setState({ text: '', author: '' });
    }

    event.preventDefault();
  }

  onChange = event => {
    //console.log(event.target.name)
    const { value, name } = event.target;
    this.setState({ [name]: value });
  }
  


  render() {
    return (
      
      
      
      <div>

        <form onSubmit={this.onSubmit}>
          
          <input
            name="author"
            type="text"
            value={this.state.author}
            onChange={this.onChange}
          />
          
          
          <input
            name="text"
            type="text"
            value={this.state.text}
            onChange={this.onChange}
          />
          
          <button type="submit">
            Add message
          </button>
        </form>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
    onAddMessages: (message) => dispatch(doAddMessageApi(message))
});
export default connect(
    null,
    mapDispatchToProps
)(AddMessages);