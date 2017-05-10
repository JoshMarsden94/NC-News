import React from 'react';

function voteButtons (props) {
    return (
        <div className="votes-container">
            <a onClick={props.handleClick.bind(null, 'up')}><i className="fa fa-caret-up fa-2x" /></a>
            <p>{props.votes}</p>
            <a onClick={props.handleClick.bind(null, 'down')}><i className="fa fa-caret-down fa-2x" /></a>
        </div>
    );
} 

export default voteButtons;
