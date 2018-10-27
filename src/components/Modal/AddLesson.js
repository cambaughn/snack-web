import React, { Component } from 'react';
import db from '../../firebase/firebaseInit';

class AddLesson extends Component {

  constructor(props) {
    super(props);

    this.state = {
      title: '',
      type: 'reading',
      order: 0,
    }
  }

  handleTitleChange = (e) => {
    this.setState({ title: e.target.value });
  }

  handleSave = () => {
    if (this.state.title) {
      db.collection('lessons').add({ title: this.state.title, type: this.state.type, order: this.state.order, pack_id: this.props.focusedPackId })
      .then(() => {
        this.props.toggleModal();
        this.props.getLessons(this.props.focusedPackId);
      });
    }
  }

  render() {
    return (
      <div style={styles.container}>
        <h3>Add New Lesson</h3>

        <input
          type="text"
          value={this.state.title}
          onChange={e => this.setState({ title: e.target.value })}
          style={styles.input}
          placeholder={'Lesson title'}
          autoFocus={true}
        />

        <select value={this.state.type} onChange={e => this.setState({ type: e.target.value })} style={styles.select} >
          <option value='reading'>Reading</option>
          <option value='drill'>Drill</option>
        </select>

        <select value={this.state.type} onChange={e => this.setState({ type: e.target.value })} style={styles.select} >
          <option value='reading'>Reading</option>
          <option value='drill'>Drill</option>
        </select>

        <button type="button" style={styles.saveButton} onClick={this.handleSave}>Save</button>
      </div>
    );
  }
}

const styles = {
  container: {
    width: '100%',
    height: '100%',

    paddingBottom: 40,

    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },

  input: {
    border: '1px solid #dfe6e9',
    outline: 'none',

    width: 300,

    fontSize: '1.3em',
    fontWeight: 'bold',

    padding: 10,
    marginBottom: 20,
  },

  select: {
    border: '1px solid #dfe6e9',
    borderRadius: 0,
    outline: 'none',
    backgroundColor: 'white',

    textAlign: 'center',

    width: 320,

    fontSize: '1.3em',
    fontWeight: 'bold',

    padding: 10,
    marginBottom: 20,
  },

  saveButton: {
    width: 100,
    height: 40,

    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',

    backgroundColor: 'black',
    fontSize: '1em',
    fontWeight: 'bold',

    color: 'white',

    border: 'none',
    outline: 'none',

    cursor: 'pointer',
  },
}

export default AddLesson;
