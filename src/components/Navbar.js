import React from 'react';
import {Link} from 'react-router';
import { Component } from 'react';

class Navbar extends Component {
  render () {
    return (
        <section className="hero is-primary">
        <div className="hero-body">
            <div className="container">
                <Link to="/" id='nav'><img className="northcoders-logo" src="https://northcoders.com/images/logos/learn_to_code_manchester_rw_original.png" alt="Northcoders logo"></img></Link>
            <h2 className="nav-heading title is-3">
                Northcoders News
            </h2>
            </div>
        </div>
        </section>
    );
  }
}

export default Navbar;