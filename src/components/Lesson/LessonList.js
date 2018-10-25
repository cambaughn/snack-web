import React, { Component } from 'react';
import { Plus } from 'react-feather';


import './Lessons.css';
import LessonListItem from './LessonListItem';

class LessonList extends Component {

  render() {
    return (
      <div className='lessons-container'>
        <div style={styles.headerWrapper}>
          <h4>Lessons</h4>
          <Plus size={20} style={styles.plus} />
        </div>
        { this.props.lessons.map(lesson => (
          <LessonListItem lesson={lesson} key={lesson.id} setFocusedLesson={this.props.setFocusedLesson} />
        ))}
      </div>
    );
  }
}


const styles = {
  headerWrapper: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },

  plus: {
    cursor: 'pointer',
  },
}

export default LessonList;
