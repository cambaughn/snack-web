import React, { Component } from 'react';

import './Packs.css';


class Packs extends Component {

  render() {
    return (
      <div className='sidebar-container'>
        <div>
          <h1 className='header'>Snack</h1>
          <h4>Packs</h4>
          { this.props.packs.map(pack => (
            <div key={pack.id} onClick={() => this.props.getLessons(pack.id)} className='link'>
              <p>{pack.name}</p>
            </div>
          ))}
        </div>
      </div>
    );
  }
}

export default Packs;
