import React, { Component } from 'react';
import { X } from 'react-feather';

import AddPack from './AddPack';

class AddContentModal extends Component {


  render() {
    return (
      <div style={styles.container}>
        <div style={styles.modal}>
          <X onClick={this.props.toggleModal} style={styles.x} size={20} />
          { this.props.modalType === 'pack' &&
            <AddPack toggleModal={this.props.toggleModal} getPacks={this.props.getPacks} />
          }
        </div>
      </div>
    );
  }
}

const styles = {
  container: {
    position: 'fixed',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    background: 'rgba(0, 0, 0, 0.4)',

    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },

  modal: {
    backgroundColor: 'white',
    width: '30vw',
    height: 'auto',

    borderRadius: 5,
  },

  x: {
    cursor: 'pointer'
  },
}

export default AddContentModal;
