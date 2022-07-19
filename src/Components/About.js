import React from 'react';

function About() {
    return (
        <div className="about">
            <div className="about-title">
                <h1>About This App</h1>
            </div>
            <div className="about-content">
                <p>This is a project for Flatiron School. The goals of the project are: </p>
                    <div className="about-content-list">
                        <ol>
                            <li>
                                You must make a single page application using create-react-app.
                            </li>
                            <li>
                                Your app should use at least 5 components in a way that keeps your code well organized.
                            </li>
                            <li>
                                There should be at least 3 client-side routes using React Router. Be sure to include a nav bar or other UI element that allows users to navigate between routes.
                            </li>
                            <li>
                                Use a json-server to create a RESTful API for your backend and make both a GET and a POST request to the json server.
                            </li>
                        </ol>
                    </div>
            </div>
        </div>
    );
}

export default About;