import React from "react";

function Resume() {
    return (
        <section>
            <div className="center">
                <h1 className="page-header">Resume</h1>
            </div>
            <div className="bottom-spacing">
                <a href="https://binaries.templates.cdn.office.net/support/templates/en-ie/lw00002110_quantized.png" download>
                    <h4>Download Resume</h4>
                </a>
            </div>
            <div>
                <h5>Front-End Proficiencies</h5>
                <ol>
                    <li>HTML</li>
                    <li>CSS</li>
                    <li>JavaScript</li>
                    <li>jQuery</li>
                    <li>Bootstrap</li>
                    <li>React</li>
                </ol>
                <br></br>
                <h5>Back-End Proficiencies</h5>
                <ol>
                    <li>APIs</li>
                    <li>Node</li>
                    <li>Express</li>
                    <li>MySQL,Sequelize</li>
                    <li>MongoDB,Mongoose</li>
                    <li>Progressive Web Applications (PWA)</li>
                </ol>
            </div>
        </section>
    );
}

export default Resume;
