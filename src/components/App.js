import React, { Component } from 'react';

import './App.css';

import Sidebar from './Sidebar/Sidebar';
import Lessons from './Lessons/Lessons';

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

  getLessons = (pack_id) => {
    db.collection('lessons').where('pack_id', '==', pack_id).get()
    .then(snapshot => {
      let lessons = snapshot.docs.map(doc => doc.data());
      this.setState({ lessons });
    })
    .catch(error => {
      console.log('Error => ', error);
    })
  }

  render() {
    return (
      <div className="app-container">
        <Sidebar packs={this.state.packs} getLessons={this.getLessons} />
        <Lessons lessons={this.state.lessons} />
      </div>
    );
  }
}

export default App;
