import React from "react";
import "./Header.css";
import HeaderOption from "./HeaderOption";
import { FaSistrix, FaHome } from "react-icons/fa";
import { MdGroup, MdMessage } from "react-icons/md";
import { IoBagRemoveSharp, IoNotifications } from "react-icons/io5";

function Header() {
  return (
    <div className="header">
      <div className="header__left">
        <img
          className="header__icon"
          src="/assets/linkedin.png"
          alt="...icon"
        />
        <div className="header__searchDiv">
          <FaSistrix className="header__searchIcon" />
          <input
            className="header__searchInput"
            type="text"
            placeholder="Search for jobs, people..."
          />
        </div>
      </div>
      <div className="header__right">
        <HeaderOption icon={<FaHome size={24} />} title="Home" />
        <HeaderOption icon={<MdGroup size={24} />} title="Network" />
        <HeaderOption icon={<IoBagRemoveSharp size={24} />} title="Jobs" />
        <HeaderOption icon={<MdMessage size={24} />} title="Messaging" />
        <HeaderOption
          icon={<IoNotifications size={24} />}
          title="Notifications"
        />
        <HeaderOption avatar={true} title="Me" />
      </div>
    </div>
  );
}

export default Header;
