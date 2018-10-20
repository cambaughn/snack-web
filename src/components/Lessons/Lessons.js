import React, { Component } from 'react';

import './Lessons.css';


class Lessons extends Component {

  render() {
    return (
      <div className='lessons-container'>
        { this.props.lessons.map(lesson => (
          <div key={lesson.id} className='link'>
            <p>{lesson.name}</p>
          </div>
        ))}
      </div>
    );
  }
}

export default Lessons;
