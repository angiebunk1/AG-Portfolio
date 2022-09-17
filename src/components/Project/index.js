import React from "react";



function Project ({ project }) {
    const {title, link1, link2, label } = project

return (

    <>    
        <a href={link1}>
        <div className={label}>
            <h2>
            {title}
            </h2>

        </div>
        </a>
        <a href={link1} target='_blank'><h4>Deployed Site</h4></a>
        <a href={link2} target='_blank'>
            <h4>Github Repo</h4>
        </a>
    </>

)
}


export default Project;