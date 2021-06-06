import React from "react";
import "./Sidebar.css";
import SideBarRow from "./SideBarRow";
import LocalHospitalIcon from "@material-ui/icons/LocalHospital";
import EmojiFlagsIcon from "@material-ui/icons/EmojiFlags";
import PeopleIcon from "@material-ui/icons/People";
import ChatIcon from "@material-ui/icons/Chat";
import StorefrontIcon from "@material-ui/icons/Storefront";
import VideoLibraryIcon from "@material-ui/icons/VideoLibrary";
import ExpandMoreOutLined from "@material-ui/icons/ExpandMore";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <SideBarRow
        src="https://avatars.githubusercontent.com/u/61633659?v=4"
        title="Haruna Oseni"
      />
      <SideBarRow
        Icon={LocalHospitalIcon}
        title="COVID-19 Information Center"
      />
      <SideBarRow Icon={EmojiFlagsIcon} title="Pages" />
      <SideBarRow Icon={PeopleIcon} title="Friends" />
      <SideBarRow Icon={ChatIcon} title="Messenger" />
      <SideBarRow Icon={StorefrontIcon} title="Marketplace" />
      <SideBarRow Icon={VideoLibraryIcon} title="Video" />
      <SideBarRow Icon={ExpandMoreOutLined} title="More" />
    </div>
  );
};

export default Sidebar;
