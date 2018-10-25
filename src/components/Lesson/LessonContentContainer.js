import React, { Component } from 'react';

import db from '../../firebase/firebaseInit.js';

import QuestionList from '../Question/QuestionList';
import ReadingLessonEditor from '../Reading/ReadingLessonEditor';
import DrillEditor from '../Drill/DrillEditor';

class LessonContentContainer extends Component {

  constructor(props) {
    super(props);

    this.state = {

    }
  }



  render() {
    return (
      <div style={{ display: 'flex' }}>
        { this.props.questions.length > 0 &&
          <QuestionList questions={this.props.questions} setFocusedQuestion={this.props.setFocusedQuestion} />
        }
        { this.props.focusedLesson.type === 'reading' &&
          <ReadingLessonEditor text={this.props.focusedLesson.text} lesson={this.props.focusedLesson} />
        }

        { this.props.focusedQuestion.type === 'drill' &&
          <DrillEditor question={this.props.focusedQuestion} />
        }
      </div>
    );
  }
}

export default LessonContentContainer;
