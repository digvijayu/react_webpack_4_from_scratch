import React, { Component } from 'react';
import { connect } from 'react-redux';
import { textChange } from '../Actions';

class Home extends Component {
  render() {
    let input
    return (
      <div>
        <h2>
          Home Page
        </h2>
        <div>Write a name and check it in SomePage Link</div>
        <input
          type="text"
          onChange={e =>
            {
              this.props.updateText(input.value)
            }
          }
          ref={node => {
            input = node
          }}
        />
        <div>
          You typed: {this.props.text}
        </div>
      </div>
    );
  }
}

const mapStateToText = state => ({
    text: state.appReducer.text,
});

const mapDispatch = dispatch => ({
  updateText: text => dispatch(textChange(text))
});


export default connect(mapStateToText, mapDispatch)(Home);
