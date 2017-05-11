import React from 'react';

function CommentForm (props) {
    return (
        <div className='container comment-form'>
                <div className='box'>
                    <div className="field">
                    <form onSubmit={handleSubmit}>
                        <h3>Got a comment to make?</h3>
                        <textarea className="textarea" placeholder="Post comment here ..." value={props.formText} onChange={props.formChange}></textarea>
                        <button className="button is-primary" type='submit' value='Post'>Submit</button>                   
                    </form>
                    </div>
                </div>
            </div>
    );
    function handleSubmit (e) {
        e.preventDefault();
        props.handleSubmit(props.id);
    }       
}

CommentForm.propTypes = {
    handleSubmit: React.PropTypes.func,
    id: React.PropTypes.string,
    formText: React.PropTypes.string,
    formChange: React.PropTypes.func
};


export default CommentForm;