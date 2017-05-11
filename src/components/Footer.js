import React from 'react';

function Footer () {
    return (
        <div className='Footer'>
            <footer  className="footer">
                <div className="container">
                    <div className="content has-text-centered">
                        <p>
                            <strong>Northcoders News</strong> by <a href="https://www.linkedin.com/in/josh-marsden-28a4b9139/">Josh Marsden</a>. The source code for this project can be found on Github
                            <a href="https://github.com/JoshMarsden94/NC-News-Frontend"> here</a>.
                        </p>
                        <p>
                            <a className="icon" href="https://github.com/JoshMarsden94">
                            <i className="fa fa-github"></i>
                            </a>
                        </p>
                    </div>
                </div>
            </footer>
        </div>
    );
}

export default Footer;