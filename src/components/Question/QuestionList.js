import React from 'react';

import './Question.css';
import QuestionListItem from './QuestionListItem';

const QuestionList = ({ questions, setFocusedQuestion }) => {
  return (
    <div className='question-list-container'>
      <h4>Questions</h4>
      { questions.map(question => (
        <QuestionListItem question={question} key={question.id} setFocusedQuestion={setFocusedQuestion} />
      ))}
    </div>
  )
}

export default QuestionList;
