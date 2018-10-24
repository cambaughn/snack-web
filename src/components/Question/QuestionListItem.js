import React, { Component } from 'react';


class QuestionListItem extends Component {


  render() {
    return (
      <div onClick={() => this.props.setFocusedQuestion(this.props.question)} style={styles.container}>
        <p>{this.props.question.spanish_text}</p>
      </div>
    );
  }
}

const styles = {
  container: {
    cursor: 'pointer',
    height: 40,
    marginBottom: 15,
    borderBottom: '1px solid #dfe6e9',

    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
}

export default QuestionListItem;
