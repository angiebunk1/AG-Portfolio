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
        <a href={link1}>first link</a>
        <a href={link2}>
            <h4>Another link</h4>
        </a>
    </>

)
}


export default Project;