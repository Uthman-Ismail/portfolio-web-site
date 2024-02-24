import React from "react";
import Logo from "../resources/profile.png"

function Header(props){
    return(
        <div class="container">
          <header class="d-flex flex-wrap justify-content-center py-3 mb-4 border-bottom">
            <a href="/" class="d-flex align-items-center mb-3 mb-md-0 me-md-auto link-body-emphasis text-decoration-none">
            <img src={Logo} alt="UI" style={{height:"32px", width:"40px"}}/>
            </a>

            <ul class="nav nav-pills">
              <li class="nav-item"><a href="#" class="nav-link active text-white" aria-current="page">Home</a></li>
              <li class="nav-item"><a href={props.resume} class="nav-link text-white">Resume</a></li>
              <li class="nav-item"><a href={props.project} class="nav-link text-white">Projects</a></li>
              <li class="nav-item"><a href={props.about} class="nav-link text-white">About</a></li>
              
            </ul>
          </header>
        </div>
    )

}

export default Header;