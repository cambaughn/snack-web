import React, { Component } from 'react';

import './App.css';

import Packs from './Packs/Packs';
import LessonList from './Lessons/LessonList';

import db from '../firebase/firebaseInit.js';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      packs: [],
      lessons: [],
      questions: []
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

  getLessonContent = (lessonId, lessonType) => {
    if (lessonType === 'reading') {
      // just return the text on the lesson object
    } else if (lessonType === 'drill') {
      db.collection('questions').where('lessonId', '==', lessonId).get()
      .then(snapshot => {
        let questions = snapshot.docs.map(doc => {
          return { ...doc.data(), id: doc.id }
        });
        console.log('Questions => ', questions)
        // this.setState({ lessons });
      })
      .catch(error => {
        console.log('Error => ', error);
      })
    }
  }

  render() {
    return (
      <div className="app-container">
        <Packs packs={this.state.packs} getLessons={this.getLessons} />
        <LessonList lessons={this.state.lessons} />
      </div>
    );
  }
}

export default App;
