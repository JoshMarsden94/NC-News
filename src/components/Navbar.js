import React from 'react';
import {Link} from 'react-router';

const Navbar = React.createClass({
  render: function () {
    return (
        <section className="hero is-primary is-bold">
        <div className="hero-body">
            <header className="Nav">
                <div className="container">
                    <div className="nav-left">
                        <div className="nav-item">
                            <Link to ="/" className="northcoders-logo-container"><img className="northcoders-logo" src="https://northcoders.com/images/logos/learn_to_code_manchester_rw_original.png" alt="Northcoders logo" /></Link>          
                        </div>
                    </div>
                </div>
            </header>
        </div>
        </section>
    );
  }
});

export default Navbar;

/* OLD
        <nav className="nav">
            <div className="nav-left">            
            <div className="nav-item">
            <Link to ="/" className="northcoders-logo-container"><img className="northcoders-logo" src="https://northcoders.com/images/logos/learn_to_code_manchester_rw_original.png" alt="Northcoders logo" /></Link>
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
*/