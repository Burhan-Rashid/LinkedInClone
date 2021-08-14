import React from 'react'
import "./MainButton.css"

function MainButton({ icon, title }) {
    return (
        <div className="mainButton">
            {icon && icon}
            <h6 className="mainButton__title">{title}</h6>
        </div>
    )
}

export default MainButton
