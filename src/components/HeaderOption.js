import { Avatar } from "@material-ui/core";
import React from "react";
import "./HeaderOption.css";
import { makeStyles } from "@material-ui/core/styles";
import { BiCaretDown } from "react-icons/bi";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import { useDispatch, useSelector } from "react-redux";
import { logout, selectUser } from "../state/userSlice";
import { auth } from "../Firebase";

const useStyles = makeStyles((theme) => ({
  small: {
    width: theme.spacing(3),
    height: theme.spacing(3),
  },
}));

function HeaderOption({ icon, title, avatar }) {
  const user = useSelector(selectUser);
  const dispatch = useDispatch();
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleLogout = () => {
    auth
      .signOut()
      .then(() => {
        dispatch(logout());
      })
      .catch((error) => {
        alert(error);
      });
  };

  return (
    <div>
      {avatar ? (
        <div className="headerOption" onClick={handleClick}>
          <Avatar className={classes.small}>
            {user.name.charAt(0).toUpperCase()}
          </Avatar>
          <div className="avatar__div">
            <h2 className="headerOption__title">{title}</h2>
            <BiCaretDown size={12} />
          </div>
        </div>
      ) : (
        <div className="headerOption">
          {icon && icon}
          <h2 className="headerOption__title">{title}</h2>
        </div>
      )}
      <Menu
        id="simple-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        <MenuItem onClick={handleClose}>Profile</MenuItem>
        <MenuItem onClick={handleClose}>My account</MenuItem>
        <MenuItem onClick={handleLogout}>Logout</MenuItem>
      </Menu>
    </div>
  );
}

export default HeaderOption;
