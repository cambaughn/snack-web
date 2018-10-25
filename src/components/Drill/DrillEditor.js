import React, { Component } from 'react';
import db from '../../firebase/firebaseInit.js';


class DrillEditor extends Component {

  constructor(props) {
    super(props);

    this.state = {
      spanishText: this.props.question.spanish_text || '',
      englishText: this.props.question.english_text || '',
      spanishAnswers: this.props.question.spanish_answers || [],
      englishAnswers: this.props.question.english_answers || [],
      saved: true,
    }
  }

  handleMainAnswerChange = (field, value) => {
    let stateObject = { saved: false };
    stateObject[field] = value;
    this.setState(stateObject);
  }

  handleSave = () => {
    db.collection('questions').doc(this.props.question.id).set({
      spanish_text: this.state.spanishText,
      english_text: this.state.englishText,
      spanish_answers: this.state.spanishAnswers,
      english_answers: this.state.englishAnswers,
    }, { merge: true })
    .then(() => {
      this.setState({ saved: true })
    });
  }

  handleAnswersChange = (value, index, answers) => {
    console.log(value, index);
    let newAnswers = this.state[answers].slice();
    newAnswers[index] = value;
    let stateObject = { saved: false };
    stateObject[answers] = newAnswers;
    this.setState(stateObject);
  }


  render() {
    let saveText = this.state.saved ? 'Saved' : 'Save';
    return (
      <div style={styles.container}>
        <div style={styles.buttonWrapper}>
          <button type="button" style={styles.saveButton} onClick={this.handleSave}>{saveText}</button>
        </div>
        <div style={styles.languageHeaderWrapper}>
          <h3 style={styles.languageHeader}>Spanish</h3>
          <h3 style={styles.languageHeader}>English</h3>
        </div>

        <div style={styles.mainAnswersWrapper}>
          <div>
            <textarea
              value={this.state.spanishText}
              onChange={e => this.handleMainAnswerChange('spanishText', e.target.value)}
              style={styles.textarea}
            />
          </div>

          <div>
            <textarea
              value={this.state.englishText}
              onChange={e => this.handleMainAnswerChange('englishText', e.target.value)}
              style={styles.textarea}
            />
          </div>
        </div>

        <div style={styles.centeredText}>
          <h4>More answers</h4>
        </div>
        <div style={styles.moreAnswers}>

          <div style={styles.moreAnswersList}>
            { this.state.spanishAnswers.map((answer, i) => (
              <textarea
                value={this.state.spanishAnswers[i]}
                onChange={e => this.handleAnswersChange(e.target.value, i, 'spanishAnswers') }
                style={styles.textarea}
                key={i}
              />
            )
          )}

          </div>

          <div style={styles.moreAnswersList}>
            { this.state.englishAnswers.map((answer, i) => (
              <textarea
                value={this.state.englishAnswers[i]}
                onChange={e => this.handleAnswersChange(e.target.value, i, 'englishAnswers') }
                style={styles.textarea}
                key={i}
              />
            )
          )}
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

  languageHeaderWrapper: {
    width: 775,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'flex-start',
    justifyContent: 'space-between',
  },

  languageHeader: {
    width: 350,
  },

  mainAnswersWrapper: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'flex-start',
    justifyContent: 'space-between',

    width: 775,
  },

  textarea: {
    width: 350,
    height: '100%',
    boxSizing: 'border-box',

    marginBottom: 30,
    paddingRight: 20,

    fontSize: '1.1em',

    lineHeight: 2,

    border: '1px solid #dfe6e9',
    overflow: 'auto',
    outline: 'none',
    resize: 'none',
  },

  centeredText: {
    width: '100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },

  buttonWrapper: {
    width: '100%',
    display: 'flex',
    alignItems: 'flex-end',
    justifyContent: 'flex-end',

    paddingRight: 50,
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

  moreAnswers: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'flex-start',
    justifyContent: 'flex-start',

    width: 775,
  },

  moreAnswersList: {
  },
}

export default DrillEditor;
