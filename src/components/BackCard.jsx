import React, { Component } from 'react';
import logo from '../logo_tryunfo.png';

class BackCard extends Component {
  render() {
    return (
      <div className="card">
        <div className="container-Backcard">
          <img src={ logo } alt="trynfo logo" className="backCard-img" />
        </div>
      </div>
    );
  }
}

export default BackCard;
