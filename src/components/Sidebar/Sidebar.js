import React, { Component } from 'react';

import './Sidebar.css';


class Sidebar extends Component {

  render() {
    return (
      <div className='sidebar-container'>
        <h1 className='header'>Snack</h1>
        { this.props.packs.map(pack => (
          <div key={pack.id} onClick={() => this.props.getLessons(pack.id)} className='link'>
            <p>{pack.name}</p>
          </div>
        ))}
      </div>
    );
  }
}

export default Sidebar;
