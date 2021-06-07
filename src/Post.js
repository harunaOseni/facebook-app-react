import { Avatar } from "@material-ui/core";
import React from "react";
import "./Post.css";
import ThumbUpIcon from "@material-ui/icons/ThumbUp";
import ChatBubbleOutlineIcon from "@material-ui/icons/ChatBubbleOutline";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import NearMeIcon from "@material-ui/icons/NearMe";
import { ExpandMoreOutlined } from "@material-ui/icons";

const Post = ({ profilePicture, image, username, timestamp, message }) => {
  return (
    <div className="post">
      {/* post-top */}
      <div className="post-top">
        <Avatar src={profilePicture} className="post-avatar" />
        <div className="post-topInfo">
          <h3>{username}</h3>
          <p>{timestamp}</p>
        </div>
      </div>
      {/* post-bottom */}
      <div className="post-message">
        <p>{message}</p>
      </div>
      <div className="post-image">
        {image && <img src={image} alt=""/> }
      </div>
      <div className="post-options">
        <div className="post-option">
          <ThumbUpIcon />
          <p>Like</p>
        </div>
        <div className="post-option">
          <ChatBubbleOutlineIcon />
          <p>Comment</p>
        </div>
        <div className="post-option">
          <NearMeIcon />
          <p>Share</p>
        </div>
        <div className="post-option">
          <AccountCircleIcon />
          <ExpandMoreOutlined />
        </div>
      </div>
    </div>
  );
};

export default Post;
