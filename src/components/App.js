import React, { Component } from 'react';

import './App.css';

import Packs from './Packs/Packs';
import LessonList from './Lesson/LessonList';
import QuestionList from './Question/QuestionList';

import db from '../firebase/firebaseInit.js';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      packs: [],
      lessons: [],
      questions: [],
      focusedPackId: null,
      focusedLessonId: null
    }

    db.collection('packs').get()
    .then(snapshot => {
      let packs = [];

      snapshot.docs.forEach(doc => {
        let id = doc.id;
        let pack = { ...doc.data(), id };
        packs.push(pack);
      })

      this.setState({ packs });
    })
  }

  getLessons = (packId) => {

    this.setState({ focusedPackId: packId });

    db.collection('lessons').where('pack_id', '==', packId).get()
    .then(snapshot => {
      let lessons = snapshot.docs.map(doc => {
        return { ...doc.data(), id: doc.id }
      });
      this.setState({ lessons });
    })
    .catch(error => {
      console.log('Error => ', error);
    })
  }

  getQuestions = (lessonId) => {

    this.setState({ focusedLessonId: lessonId });

    db.collection('questions').where('lesson_id', '==', lessonId).get()
    .then(snapshot => {
      let questions = snapshot.docs.map(doc => {
        return { ...doc.data(), id: doc.id }
      });
      console.log('Questions => ', questions)
      this.setState({ questions })
    })
    .catch(error => {
      console.log('Error => ', error);
    })
  }


  render() {
    return (
      <div className="app-container">
        <Packs packs={this.state.packs} getLessons={this.getLessons} />

        { this.state.lessons.length > 0 &&
          <LessonList lessons={this.state.lessons} getQuestions={this.getQuestions} />
        }

        { this.state.focusedLessonId &&
          <QuestionList questions={this.state.questions} />
        }

      </div>
    );
  }
}

export default App;
