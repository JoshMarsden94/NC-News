import React from 'react';

const CommentForm = React.createClass({
    handleSubmit (e) {
        e.preventDefault();
        this.props.handleSubmit(this.props.id);
    },
    render () {
        return (
            <div className='container'>
                 <div className='box'>
                     <div className="field">
                        <form onSubmit={this.handleSubmit}>
                            <h3>Got a comment to make?</h3>
                            <textarea className="textarea" placeholder="Post comment here ..." value={this.props.formText} onChange={this.props.formChange}></textarea>
                            <button className="button is-primary" type='submit' value='Post'>Submit</button>                   
                        </form>
                     </div>
                 </div>
             </div>
        );
    }
});

export default CommentForm;