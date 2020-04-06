import React from 'react';

import './detail-cv.css';

const DetailCV = () => {
    return (
        <div className="detail-cv-container">
            <div className="detail-cv-education-container">
                <h2>Education</h2>
                <div className="education">
                    <div className="period">
                        2016 - 2020
                    </div>
                    <div className="education-content">
                        <h3>Kansaigaidai University</h3>
                        <ul>
                            <li>Located in Osaka, Japan</li>
                            <li>B.A. in English Linguistics</li>
                            <li>English Language and Communication</li>
                            <li>GPA 3.39/4.00</li>
                            <li>One year study in the Netherlands as an exchange student</li>
                        </ul>
                    </div>
                </div>
                <div className="education">
                    <div className="period">
                        2020 - 2022
                    </div>
                    <div className="education-content">
                        <h3>Varna University of Management</h3>
                        <ul>
                        <li>Located in Varna, Bulgaria</li>
                            <li>B.A.(expected) in Computer Science</li>
                            <li>Software Engineering</li>
                        </ul>
                    </div>
                </div>
            </div>

            <div className="detail-cv-work-container">
                <h2>Work Experience</h2>
                <div className="work">
                    <div className="period">
                        08/2018 - 12/2018
                    </div>
                    <div className="work-content">
                        <h3>Mizuho Bank Europe N.V. (Intern in HR and IT department)</h3>
                        <ul>
                            <li>Administer Authentication of Software and Data</li>
                            <li>Carry out fishing test within the company</li>
                            <li>Manage recruitment process and on and off boarding registrations</li>
                            <li>Manage job descriptions of employees</li>
                            <li>Translate merger deed</li>
                        </ul>
                    </div>

                </div>

            </div>

            <div className="detail-cv-skill-container">
                <h2>Skill</h2>
                <div className="skill">
                    <div className="skill-content">
                        <ul>
                            <li>HTML, CSS</li>
                            <li>React, JavaScript</li>
                            <li>Express, Node.js</li>
                            <li>Flask, python</li>
                            <li>.NET Core, C#</li>
                            <li>MySQL, MS SQL Server</li>
                            <li>Docker, Docker Compose</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default DetailCV;