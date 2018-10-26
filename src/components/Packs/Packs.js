import React, { Component } from 'react';
import { Plus } from 'react-feather';

import './Packs.css';


class Packs extends Component {

  render() {
    return (
      <div className='sidebar-container'>
        <div>
          <h1 className='header'>Snack</h1>
          <div style={styles.headerWrapper}>
            <h4>Packs</h4>
            <Plus size={20} style={styles.plus} onClick={() => this.props.toggleModal('pack')} />
          </div>
          { this.props.packs.map(pack => (
            <div key={pack.id} onClick={() => this.props.getLessons(pack.id)} className='link'>
              <p>{pack.title}</p>
            </div>
          ))}
        </div>
      </div>
    );
  }
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

export default Packs;
