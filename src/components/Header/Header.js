import React, { Component } from 'react';
import


class Header extends Component {
  
  render() {
    return (
      <div className="navbar has-shadow">
      <div className="container">
        <div className="navbar-brand">
          <a className="navbar-item">MockMeUp</a>

          
          <button className="navbar-burger">
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>

        

        <div className="navbar-end navbar-menu">

          

          <div className="navbar-item">
            <p className="control">
                <a className="button is-primary is-outlined">
                  <span className="icon">
                    <i className="fa fa-download"></i>
                  </span>  
                  <span>Join Now</span>
                </a>
            </p>
          </div>
          
        </div>
      </div>
    </div>
    );
  }
}

export default Header;
