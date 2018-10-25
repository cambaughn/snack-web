import React from 'react';
import { Plus } from 'react-feather';

import './Question.css';
import QuestionListItem from './QuestionListItem';

const QuestionList = ({ questions, setFocusedQuestion }) => {
  return (
    <div className='question-list-container'>

      <div style={styles.headerWrapper}>
        <h4>Questions</h4>
        <Plus size={20} style={styles.plus} />
      </div>

      { questions.map(question => (
        <QuestionListItem question={question} key={question.id} setFocusedQuestion={setFocusedQuestion} />
      ))}
    </div>
  )
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

export default QuestionList;
