import React from "react";
import Me from "../resources/me.jpg"

function About(){
    return (
        <div class="px-4 py-5 my-5" id = "about">
            <img class="d-block mx-auto mb-4" id="me" src={Me} alt="Owner" width="150" height="150"/>
            <h1 class="display-5 fw-bold text-center text-body-emphasis">About</h1>
            <div class="col-lg-6 mx-auto">
                <p class="mb-4">My name is Uthman Ismail, and I am currently enrolled as a student of Informatics Engineering at the Institute Polytechnic of Bragança
                    As a passionate individual with a keen interest in technology, I am driven by a strong desire to continuously expand my knowledge and skills in this field. My ambition is to utilize my expertise to contribute to the creation of innovative and impactful technological solutions.
                   I am committed to immersing myself fully in my studies and embracing every opportunity to learn and grow. My ultimate goal is to leverage my education and experiences to contribute towards building a better and more beautiful future through technology.</p>
            </div>
        </div>
    )
}

export default About;