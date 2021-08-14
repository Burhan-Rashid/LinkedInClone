import React from 'react'
import "./Sidebar.css"

function Sidebar() {
    return (
        <div className="sidebar">
            <div className="sidebar__top">
                <img className="sidebar__topBackground" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRYJZsUZ4-Ykn4BM8tZ1emHb9D--DnJ_wsB7w&usqp=CAU" alt="..." />
                <div className="sidebar__topAvatarDiv">
                    <img className="sidebar__topAvatar" alt="Profile..." src="https://media-exp1.licdn.com/dms/image/C4E03AQGAsFbAppKH_A/profile-displayphoto-shrink_200_200/0/1625908476660?e=1632355200&v=beta&t=I6M_uV1plr_jkcsI95FThruYHXgP-eaVintQfaWPB0Q" />
                </div>
                <div className="sidebar__topDescDiv">
                    <h2 className="sidebar__topName">Burhan Rashid</h2>
                    <h4 className="sidebar__topDescription">Senior Software Engineer at Eonyx</h4>
                </div>
                <hr />
                <div className="sidebar__topConnectionsDiv">
                    <div className="sidebar__topConnections">
                        <h3>Who viewed your profile</h3><h4>156</h4>
                    </div>
                    <div className="sidebar__topConnections">
                        <h3>Connections</h3><h4>785</h4>
                    </div>
                </div>
            </div>
            <div className="sidebar__bottom">
                <h1 className="sidebar__bottomTitle">Recent</h1>
                <ul className="sidebar__bottomList">
                    <li>#software Engineering</li>
                    <li>#Machine learning in trend</li>
                    <li>#tech enthusiast </li>
                    <li>#latest development tools for software engineering</li>
                    <li>#web dev with react and redux</li>
                </ul>
            </div>

        </div>
    )
}

export default Sidebar
