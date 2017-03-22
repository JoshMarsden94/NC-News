import React from 'react';
import Navbar from './Navbar';

const App = React.createClass({
  render: function () {
    return (
      <div>
        <Navbar />
        {this.props.children}
      </div>
    );
  }
});

export default App;