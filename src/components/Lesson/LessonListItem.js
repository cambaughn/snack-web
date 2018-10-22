import React from 'react';
import { Zap, Book } from 'react-feather';


const LessonListItem = ({ lesson, setFocusedLesson }) => {

  let typeIcon = lesson.type === 'reading' ? <Book size={18} /> : <Zap size={18} />;


  return (
    <div className='lesson-link' onClick={() => setFocusedLesson(lesson)}>
      <span>{lesson.title}</span>
      <span>{typeIcon}</span>
    </div>
  )
}

export default LessonListItem;
