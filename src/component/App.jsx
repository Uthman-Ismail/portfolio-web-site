import React from "react";
import Header from "./Header";
import Resume from "./Resume";
import Project from "./Project";
import About from "./About";
import Footer from "./Footer";

function App(){
    return(
        <div>
            <Header 
            resume = "#resume"
            project = "#project"
            about = "#about" />
            <Resume />
            <Project />
            <About />
            <Footer />
        </div>
    )
}

export default App;