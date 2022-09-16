import React, { useState }from "react";
import Project from "../Project";


function Portfolio () {
    const [projects] = useState([
        { title: 'Project 1', link1: 'https://www.google.com/', link2: 'https://github.com/', label: 'project1' },
        { title: 'Project 2', link1: 'https://www.google.com/', link2: 'https://github.com/', label: 'project2' },
        { title: 'Project 3', link1: 'https://www.google.com/', link2: 'https://github.com/', label: 'project3' },
        { title: 'Project 4', link1: 'https://www.google.com/', link2: 'https://github.com/', label: 'project4' },
        { title: 'Project 5', link1: 'https://www.google.com/', link2: 'https://github.com/', label: 'project5' },
        { title: 'Project 6', link1: 'https://www.google.com/', link2: 'https://github.com/', label: 'project6' }
      ]);

      return (
        <div>
            <h2>Projects</h2>
            <div>
                {projects.map((project) => (
                    <Project project={project} key={project.title}></Project>
                ))}
            </div>              
            
        </div>
    );

}

export default Portfolio;