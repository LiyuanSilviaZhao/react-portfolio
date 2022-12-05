import React from "react";

function Resume() {
    return (
        <section className="resumePage">
            <div>
                <h1 className="page-header">Resume</h1>
            </div>
            <div className="bottom-spacing">
                <a href="https://binaries.templates.cdn.office.net/support/templates/en-ie/lw00002110_quantized.png" download>
                    <h5>Click to Download Resume</h5>
                </a>
            </div>
            <div className="resumeInfo">
                <h3>Front-End Proficiencies</h3>
                    <li>HTML</li>
                    <li>CSS</li>
                    <li>JavaScript</li>
                    <li>jQuery</li>
                    <li>Bootstrap</li>
                    <li>React</li>
                <br></br>
                <h3>Back-End Proficiencies</h3>
                    <li>APIs</li>
                    <li>Node</li>
                    <li>Express</li>
                    <li>MySQL,Sequelize</li>
                    <li>MongoDB,Mongoose</li>
                    <li>Progressive Web Applications (PWA)</li>
            </div>
        </section>
    );
}

export default Resume;
