import React from 'react';
import Navbar from './Navbar';
import { Component } from 'react';

class App extends Component {
  render () {
    return (
      <div>
        <Navbar />
        {this.props.children}
      </div>
    );
  }
}

App.propTypes = {
  children: React.PropTypes.object
};

export default App;