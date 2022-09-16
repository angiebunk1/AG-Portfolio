import React from "react";



function Project ({title, link1, link2, class}) {
return (
    <>    
        <a href={link1}>
        <div className={class}>
            <h2>
            {title}
            </h2>

        </div>
        </a>
        <a href={link2}>
            <h4>Another link</h4>
        </a>
    </>

)
}


export default Project;