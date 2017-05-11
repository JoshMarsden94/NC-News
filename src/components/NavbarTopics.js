import React from 'react';
import {Link} from 'react-router';
import {connect} from 'react-redux';
import {fetchTopics} from '../actions/actions';
import { Component } from 'react';

class NavbarTopics extends Component {
    componentDidMount () {
        this.props.getTopics();
    }
    render () {
        return (
            <div className="navbar-topics">
                <nav className="topics-block">
                    {this.props.topics.map((topic,i) => {
                        return (
                            <Link 
                            key={i}
                            className="button" 
                            to={`/topics/${topic.slug}`}>
                                {topic.title}
                            </Link>
                        );
                    })}
                </nav>
            </div>
        );
    }
}


function mapDispatchToProps (dispatch) {
  return {
    getTopics: () => {
      dispatch(fetchTopics());
    }
  };
}

function mapStateToProps (state) {
  return {
    topics: state.topics.data
  };
}

NavbarTopics.propTypes = {
    getTopics: React.PropTypes.func,
    topics: React.PropTypes.array,
};

export default connect(mapStateToProps, mapDispatchToProps)(NavbarTopics);