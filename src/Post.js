import { Avatar } from "@material-ui/core";
import React from "react";
import "./Post.css";

const Post = ({ profilePicture, image, username, timestamp, message }) => {
  return (
    <div className="post">
      {/* post-top */}
      <div className="post-top">
        <Avatar src={profilePicture} post-avatar />
      </div>
    </div>
  );
};

export default Post;
