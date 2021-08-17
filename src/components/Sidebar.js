import { Avatar } from "@material-ui/core";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectUser } from "../state/userSlice";
import "./Sidebar.css";
import { makeStyles } from "@material-ui/core/styles";
import { deepPurple } from "@material-ui/core/colors";

const useStyles = makeStyles((theme) => ({
  large: {
    width: theme.spacing(9),
    height: theme.spacing(9),
  },
  purple: {
    color: theme.palette.getContrastText(deepPurple[500]),
    backgroundColor: deepPurple[500],
  },
}));

function Sidebar() {
  const classes = useStyles();
  const dispatch = useDispatch();
  const user = useSelector(selectUser);
  React.useEffect(() => {
    console.log(user);
  });
  return (
    <div className="sidebar">
      <div className="sidebar__top">
        <img
          className="sidebar__topBackground"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRYJZsUZ4-Ykn4BM8tZ1emHb9D--DnJ_wsB7w&usqp=CAU"
          alt="..."
        />
        <div className="sidebar__topAvatarDiv">
          <Avatar
            className="sidebar__topAvatar"
            alt="Profile..."
            className={[classes.large, classes.purple]}
            src={user.photoUrl}
          >
            {user.name.charAt(0).toUpperCase()}
          </Avatar>
        </div>
        <div className="sidebar__topDescDiv">
          <h2 className="sidebar__topName">{user.name}</h2>
          <h4 className="sidebar__topDescription">{user.headline}</h4>
        </div>
        <hr />
        <div className="sidebar__topConnectionsDiv">
          <div className="sidebar__topConnections">
            <h3>Who viewed your profile</h3>
            <h4>{user.profileViews}</h4>
          </div>
          <div className="sidebar__topConnections">
            <h3>Connections</h3>
            <h4>{user.connections}</h4>
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
  );
}

export default Sidebar;
