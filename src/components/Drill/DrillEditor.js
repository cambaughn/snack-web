import React, { Component } from 'react';
import db from '../../firebase/firebaseInit.js';


class DrillEditor extends Component {

  constructor(props) {
    super(props);

    this.state = {
      spanishText: this.props.question.spanish_text || '',
      englishText: this.props.question.english_text || '',
      saved: true,
    }

    console.log('rendering')
  }

  handleChange = (field, value) => {
    console.log(field, value)
    this.setState({ field: value });
  }

  handleSave = () => {
    db.collection('questions').doc(this.props.question.id).set({
      spanish_text: this.state.spanishText,
      english_text: this.state.englishText
    }, { merge: true })
    .then(() => {
      this.setState({ saved: true })
    });
  }

  render() {
    return (
      <div style={styles.container}>
        <button type="button" style={styles.saveButton} onClick={this.handleSave}>Save</button>
        <div style={styles.mainAnswersWrapper}>
          <div>
            <h4>Spanish</h4>
            <textarea
              value={this.state.spanishText}
              onChange={e => this.setState({ spanishText: e.target.value})}
              style={styles.textarea}
            />
          </div>

          <div>
            <h4>English</h4>
            <textarea
              value={this.state.englishText}
              onChange={e => this.setState({ englishText: e.target.value})}
              style={styles.textarea}
            />
          </div>
        </div>
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

  mainAnswersWrapper: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'flex-start',
    justifyContent: 'space-between',

    width: 800,
  },

  input: {
    border: 'none',
    outline: 'none',

    fontSize: '1.3em',
    // fontWeight: 'bold',

    marginBottom: 30,
  },

  textarea: {
    width: 350,
    height: '100%',
    boxSizing: 'border-box',

    marginBottom: 40,
    marginRight: 40,
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
    height: 40,

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
  },


}

export default DrillEditor;
