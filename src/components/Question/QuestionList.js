import React from 'react';

import './Question.css';
import QuestionListItem from './QuestionListItem';

const QuestionList = ({ questions }) => {
  return (
    <div className='question-list-container'>
      <h3>Questions</h3>
      { questions.map(question => (
        <QuestionListItem question={question} key={question.id} />
      ))}
    </div>
  )
}

export default QuestionList;
