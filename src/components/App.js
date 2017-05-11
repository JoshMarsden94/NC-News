import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import { Component } from 'react';

class App extends Component {
  render () {
    return (
      <div>
        <Navbar />
        {this.props.children}
        <Footer />
      </div>
    );
  }
}

App.propTypes = {
  children: React.PropTypes.object
};

export default App;