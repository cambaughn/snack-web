import React, { Component } from 'react';

import './Lessons.css';
import LessonListItem from './LessonListItem';

class LessonList extends Component {

  render() {
    return (
      <div className='lessons-container'>
        <h4>Lessons</h4>
        { this.props.lessons.map(lesson => (
          <LessonListItem lesson={lesson} key={lesson.id} setFocusedLesson={this.props.setFocusedLesson} />
        ))}
      </div>
    );
  }
}

export default LessonList;
