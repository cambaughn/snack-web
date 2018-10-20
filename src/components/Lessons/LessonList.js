import React, { Component } from 'react';

import './Lessons.css';
import LessonListItem from './LessonListItem';

class LessonList extends Component {

  render() {
    return (
      <div className='lessons-container'>
        { this.props.lessons.map(lesson => (
          <LessonListItem lesson={lesson} key={lesson.id} />
        ))}
      </div>
    );
  }
}

export default LessonList;
