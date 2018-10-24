import React, { Component } from 'react';

import db from '../../firebase/firebaseInit.js';

import QuestionList from '../Question/QuestionList';
import ReadingLessonEditor from '../Reading/ReadingLessonEditor';
import DrillEditor from '../Drill/DrillEditor';

class LessonContentContainer extends Component {

  constructor(props) {
    super(props);

    this.state = {
      questions: [],
      text: ''
    }
  }

  componentDidMount = () => {
    if (this.props.focusedLesson.type === 'drill') {
      this.getQuestions(this.props.focusedLesson.id);
    } else if (this.props.focusedLesson.type === 'reading') {
      this.setState( { text: this.props.focusedLesson.text });
    }
  }

  getQuestions = (lessonId) => {
    db.collection('questions').where('lesson_id', '==', lessonId).get()
    .then(snapshot => {
      let questions = snapshot.docs.map(doc => {
        return { ...doc.data(), id: doc.id }
      });
      console.log('Questions => ', questions)
      this.setState({ questions })
    })
    .catch(error => {
      console.log('Error => ', error);
    })
  }



  render() {
    return (
      <div style={{ display: 'flex' }}>
        { this.state.questions.length > 0 &&
          <QuestionList questions={this.state.questions} setFocusedQuestion={this.props.setFocusedQuestion} />
        }
        { this.state.text &&
          <ReadingLessonEditor text={this.state.text} lesson={this.props.focusedLesson} />
        }

        { this.props.focusedQuestion &&
          <DrillEditor question={this.props.focusedQuestion} />
        }
      </div>
    );
  }
}

export default LessonContentContainer;
