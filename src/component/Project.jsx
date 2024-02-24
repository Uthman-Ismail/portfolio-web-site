import React from "react";
import Card from "./Card";
import projects from "../projects";

function Project(){
    return (
        <div class = "container" id = "project">
            <h3>Projects</h3>
            <div class="row row-cols-1 row-cols-md-2 g-4">
                {projects.map(project => 
                    <Card 
                        key = {project.id}
                        img = {project.img}
                        alt = {project.alt}
                        title = {project.title}
                        description = {project.describtion}
                    />
                )}
            </div>
        </div>
    )
}

export default Project