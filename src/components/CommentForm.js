import React from 'react';


const CommentForm = React.createClass({
    render () {
        return (
            <div className='comment-form' onSubmit={this.props.handleSubmit.bind(null, this.props.id)}>
                <form>
                    <h3>Got a comment to make?</h3>
                    <input className='inputtext' type='text' placeholder='Say something...' value={this.props.formText} onChange={this.props.formChange} />
                    <input className='inputsubmit' type='submit' value='Post' />                    
                </form>
            </div>
        );
    }
});




export default CommentForm;