import React from 'react';
import {Link} from 'react-router';

const Navbar = React.createClass({
  render: function () {
    return (
        <nav className="nav">
            <div className="nav-left">            
            <div className="nav-item">
            <Link to ="/"><img className="northcoders-logo" src="https://northcoders.com/images/logos/learn_to_code_manchester_rw_original.png" alt="Northcoders logo" /></Link>
            </div>   
            </div>              
            <a className="nav-item">
            <span className="icon">
                <i className="fa fa-github"></i>
            </span>
            </a>
            <a className="nav-item">
            <span className="icon">
                <i className="fa fa-twitter"></i>
            </span>
            </a>
        </nav>
    );
  }
});

export default Navbar;
