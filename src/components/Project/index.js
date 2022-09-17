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
        <p>
        <a href={link1} target='_blank'>Deployed Site</a>
        </p>
        <p>
        <a href={link2} target='_blank'>Github Repo</a>
        </p>
    </>

)
}


export default Project;