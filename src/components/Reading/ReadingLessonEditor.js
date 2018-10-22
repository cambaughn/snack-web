import React, { Component } from 'react';


class ReadingLessonEditor extends Component {

  constructor(props) {
    super(props);

    this.state = {
      text: this.props.text,
    }
  }

  render() {
    return (
      <div>
        <p>{this.state.text}</p>
      </div>
    );
  }
}

export default ReadingLessonEditor;
