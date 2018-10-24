import React, { Component } from 'react';
import db from '../../firebase/firebaseInit.js';


class ReadingLessonEditor extends Component {

  constructor(props) {
    super(props);

    this.state = {
      title: this.props.lesson.title,
      text: this.props.text,
      saved: true,
    }
  }

  handleSave = () => {
    db.collection('lessons').doc(this.props.lesson.id).set({
      title: this.state.title,
      text: this.state.text
    }, { merge: true })
    .then(() => {
      this.setState({ saved: true })
    });
  }

  handleTitleChange = (event) => {
    this.setState({ title: event.target.value, saved: false });
  }

  handleBodyChange = (event) => {
    this.setState({ text: event.target.value, saved: false });
  }

  render() {

    let saveText = this.state.saved ? 'Saved' : 'Save';

    return (
      <div style={styles.container}>
          <input
            type="text"
            value={this.state.title}
            onChange={this.handleTitleChange}
            style={styles.title}
          />
          <textarea
            value={this.state.text}
            onChange={this.handleBodyChange}
            style={styles.textarea}
          />
          <button type="button" style={styles.saveButton} onClick={this.handleSave}>{saveText}</button>
      </div>
    );
  }
}

const styles = {
  container: {
    flex: 1,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
    justifyContent: 'flex-start',

    height: '90vh',

    paddingLeft: 50,
    paddingTop: 50,
  },

  title: {
    border: 'none',
    outline: 'none',

    fontSize: '1.5em',
    fontWeight: 'bold',

    marginBottom: 20,
  },

  textarea: {
    width: '50vw',
    height: '100%',
    boxSizing: 'border-box',

    marginBottom: 40,
    paddingRight: 20,

    fontSize: '1.1em',

    lineHeight: 2,

    border: 'none',
    overflow: 'auto',
    outline: 'none',
    resize: 'none',
  },

  saveButton: {
    width: 100,
    height: 60,

    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',

    backgroundColor: 'black',
    fontSize: '1em',
    fontWeight: 'bold',

    color: 'white',

    border: 'none',
    outline: 'none',

    cursor: 'pointer',
  }
}

export default ReadingLessonEditor;
