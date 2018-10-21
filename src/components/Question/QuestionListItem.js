import React, { Component } from 'react';


class QuestionListItem extends Component {


  render() {
    return (
      <div>
        <p>{this.props.question.text}</p>
      </div>
    );
  }
}

export default QuestionListItem;
