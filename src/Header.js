import React from "react";
import SearchIcon from "@material-ui/icons/Search";
import HomeIcon from "@material-ui/icons/Home";
import FlagIcon from "@material-ui/icons/Flag";
import SubscriptionsIcon from "@material-ui/icons/Subscriptions";
import StorefrontIcon from "@material-ui/icons/Storefront";
import SupervisedUserCircleIcon from "@material-ui/icons/SupervisedUserCircle";
import "./Header.css";

const Header = () => {
  return (
    <div className="header">
      {/* Header-Left */}
      <div className="header-left">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/51/Facebook_f_logo_%282019%29.svg/1200px-Facebook_f_logo%29.svg.png"
          alt="facebook-logo"
        />
        <div className="header-search-bar">
          <SearchIcon />
          <input type="text" />
        </div>
      </div>

      {/* Header-Middle */}
      <div className="header-middle">
        <div className="header-option">
          <HomeIcon />
        </div>
        <div className="header-option">
          <FlagIcon />
        </div>
        <div className="header-option">
          <SubscriptionsIcon />
        </div>
        <div className="header-option">
          <StorefrontIcon />
        </div>
        <div className="header-option">
          <SupervisedUserCircleIcon />
        </div>
      </div>

      {/* Header-Right */}
      <div className="header-right"></div>
    </div>
  );
};

export default Header;
