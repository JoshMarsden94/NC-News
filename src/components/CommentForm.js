import React from 'react';


const CommentForm = React.createClass({
    render () {
        return (
            <div className='container' onSubmit={this.props.handleSubmit.bind(null, this.props.id)}>
                 <div className='box'>
                     <div className="field">
                        <form>
                            <h3>Got a comment to make?</h3>
                            <textarea className="textarea" placeholder="Post comment here ..." value={this.props.formText} onChange={this.props.formChange}></textarea>
                            <button className="button is-primary inputsubmit" type='submit' value='Post'>Submit</button>                   
                        </form>
                     </div>
                 </div>
             </div>
        );
    }
});

export default CommentForm;
