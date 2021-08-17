import { Avatar } from "@material-ui/core";
import React from "react";
import "./HeaderOption.css";
import { makeStyles } from "@material-ui/core/styles";
import { BiCaretDown } from "react-icons/bi";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import { useDispatch } from "react-redux";
import { logout } from "../state/userSlice";

const useStyles = makeStyles((theme) => ({
  small: {
    width: theme.spacing(3),
    height: theme.spacing(3),
  },
}));

function HeaderOption({ icon, title, avatar }) {
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
    dispatch(logout());
  };

  return (
    <div>
      {avatar ? (
        <div className="headerOption" onClick={handleClick}>
          <Avatar className={classes.small} />
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
