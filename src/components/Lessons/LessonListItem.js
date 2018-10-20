import React from 'react';
import { Zap, Book } from 'react-feather';


const LessonListItem = ({ lesson }) => {

  let typeIcon = lesson.type === 'reading' ? <Book size={18} /> : <Zap size={18} />;

  return (
    <div className='lesson-link'>
      <span>{lesson.name}</span>
      <span>{typeIcon}</span>
    </div>
  )
}

export default LessonListItem;
