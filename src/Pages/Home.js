import React, { Component } from 'react';
import { connect } from 'react-redux';
import { textChange } from '../Actions';
import { FormattedMessage } from 'react-intl'

class Home extends Component {
  render() {
    let input
    return (
      <div>
        <h2>
          <FormattedMessage
            id="Home.title"
            defaultMessage="Home Page"
          />
        </h2>
        <div>
          <FormattedMessage
            id="Home.input"
            defaultMessage="Write a name and check it in SomePage Link"
          />
        </div>
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
          <FormattedMessage
            id="Home.stateText"
            defaultMessage="You typed: {text}"
            values={{text: <b>{this.props.text}</b>}}
          />
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
