import React, { Component } from 'react';
import db from '../../firebase/firebaseInit';

class AddPack extends Component {

  constructor(props) {
    super(props);

    this.state = {
      title: '',
    }
  }

  handleTitleChange = (e) => {
    this.setState({ title: e.target.value });
  }

  handleSave = () => {
    if (this.state.title) {
      db.collection('packs').add({ title: this.state.title })
      .then(() => {
        this.props.toggleModal();
        this.props.getPacks();
      });
    }
  }

  render() {
    return (
      <div style={styles.container}>
        <h3>Add New Pack</h3>

        <input
          type="text"
          value={this.state.title}
          onChange={this.handleTitleChange}
          style={styles.title}
          placeholder={'Pack title'}
        />

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

  title: {
    border: '1px solid #dfe6e9',
    outline: 'none',

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

export default AddPack;
