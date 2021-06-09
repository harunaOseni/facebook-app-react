import React from "react";
import SearchIcon from "@material-ui/icons/Search";
import HomeIcon from "@material-ui/icons/Home";
import FlagIcon from "@material-ui/icons/Flag";
import SubscriptionsIcon from "@material-ui/icons/Subscriptions";
import StorefrontIcon from "@material-ui/icons/Storefront";
import SupervisedUserCircleIcon from "@material-ui/icons/SupervisedUserCircle";
import "./Header.css";
import Avatar from "@material-ui/core/Avatar";
import { ExpansionPanel, IconButton } from "@material-ui/core";
import AddIcon from "@material-ui/icons/Add";
import ForumIcon from "@material-ui/icons/Forum";
import NotificationsActiveIcon from "@material-ui/icons/NotificationsActive";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import { useStateValue } from "./StateProvider";

const Header = () => {
  const [{ user }, dispatch] = useStateValue();
  return (
    <div className="header">
      {/* Header-Left */}
      <div className="header-left">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/51/Facebook_f_logo_%282019%29.svg/1200px-Facebook_f_logo%29.svg.png"
          alt="facebook-logo"
        />
        <div className="header-input">
          <SearchIcon />
          <input type="text" placeholder="Search Facebook" />
        </div>
      </div>

      {/* Header-Middle */}
      <div className="header-middle">
        <div className="header-option header-option-active">
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
      <div className="header-right">
        <div className="header-info">
          <Avatar src={user.photoURL} />
          <h4>{user.displayName}</h4>
        </div>
        <IconButton>
          <AddIcon />
        </IconButton>
        <IconButton>
          <ForumIcon />
        </IconButton>
        <IconButton>
          <NotificationsActiveIcon />
        </IconButton>
        <IconButton>
          <ExpandMoreIcon />
        </IconButton>
      </div>
    </div>
  );
};

export default Header;
