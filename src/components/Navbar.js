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
            <div className="nav-item">
            <span className="icon">
                <a href="https://github.com/northcoders"><i className="fa fa-github"></i></a>
            </span>
            </div>
            <div className="nav-item">
            <span className="icon">
                <a href="https://twitter.com/northcoders?ref_src=twsrc%5Egoogle%7Ctwcamp%5Eserp%7Ctwgr%5Eauthor"><i className="fa fa-twitter"></i></a>
            </span>
            </div>
        </nav>
    );
  }
});

export default Navbar;
