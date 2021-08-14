import React from 'react';
import "./HeaderOption.css";

function HeaderOption({ icon, title }) {
    return (
        <div className="headerOption">
            {icon && icon}
            <h2 className="headerOption__title">{title}</h2>
        </div>
    )
}

export default HeaderOption
