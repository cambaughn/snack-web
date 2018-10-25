import React, { Component } from 'react';

import './App.css';

import Packs from './Packs/Packs';
import LessonList from './Lesson/LessonList';
import LessonContentContainer from './Lesson/LessonContentContainer';

import db from '../firebase/firebaseInit.js';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      packs: [],
      lessons: [],
      questions: [],
      focusedPackId: null,
      focusedLesson: null,
      focusedQuestion: null,
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

    this.setState({ questions: [], focusedLesson: null, focusedQuestion: null });

    this.setState({ focusedPackId: packId });

    // .orderBy("order")
    db.collection('lessons').where('pack_id', '==', packId).get()
    .then(snapshot => {
      let lessons = snapshot.docs.map(doc => {
        return { ...doc.data(), id: doc.id }
      });
      this.setState({ lessons });
    })
    .catch(error => {
      console.log(error);
    })
  }

  setFocusedLesson = (focusedLesson) => {
    console.log(focusedLesson)
    this.setState({ focusedLesson });
  }

  setFocusedQuestion = (focusedQuestion) => {
    console.log('question => ', focusedQuestion)
    this.setState({ focusedQuestion });
  }


  render() {
    return (
      <div className="app-container">
        <Packs packs={this.state.packs} getLessons={this.getLessons} />

        { this.state.lessons.length > 0 &&
          <LessonList lessons={this.state.lessons} setFocusedLesson={this.setFocusedLesson} />
        }

        { this.state.focusedLesson &&
          <LessonContentContainer
            focusedLesson={this.state.focusedLesson}
            setFocusedQuestion={this.setFocusedQuestion}
            focusedQuestion={this.state.focusedQuestion}
          />
        }

      </div>
    );
  }
}

export default App;
