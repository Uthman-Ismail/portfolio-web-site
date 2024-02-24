import React from "react";

function Resume(){
    return (
        <div class= "container" id = "resume">
            <div>
                <h1>Hello</h1>
                <h2>Welcome to my resume</h2>
                <p>My name is Uthman Oluwadamilare Ismail, and I am currently enrolled as a student of Informatics Engineering at the Institute Polytechnic of Bragança.</p>
            </div>
            <div class="container">
                <div class="row">
                    <div class="col-4">
                    <h5>Uthman Oluwadamilare Ismail</h5>
                    <p>Technology student</p>
                    <p>IPB</p>
                    <p>oluwadamilare756@gmail.com</p>
                    <h5>Skills</h5>
                    <ul id="skill">
                        <li>Programming</li>
                        <li>Financial Trader</li>
                    </ul>
                    </div>
                    <div class="col-3">
                    <h5>Education</h5>
                    <p class= "edu">The Selected Preparatory Career College, Tollgate, Ibadan, Oyo, Nigeria <br />2016-2019</p>
                    <p></p>
                    <p class = "edu">Institute Polytechnic of Bragança, Bragança, Portugal <br />2022 till present</p>
                    </div>
                    <div class="col-5">
                    <h5>Experience</h5>
                    <h6>Sales Representative</h6>
                    <ul class= "experience">
                        <li>Contact clients via phone calls to introduce the company's products or services.</li>
                        <li>Explain the features and benefits of the company's offerings to potential clients.</li>
                        <li>Answer any questions or concerns the clients may have.</li>
                    </ul>
                    <h6>Teacher</h6>
                    <ul class= "experience">
                        <li>Instruct and educate pupils in various subjects, with a focus on preparing them for common entrance examinations.</li>
                        <li>Develop lesson plans and teaching materials that align with curriculum standards and exam requirements.</li>
                        <li>Create a conducive learning environment that fosters student engagement and participation.</li>
                    </ul>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Resume;