import React from "react";
import "./MessageSender.css";
import { useState } from "react";
import { Avatar, setRef } from "@material-ui/core";
import VideocamIcon from "@material-ui/icons/Videocam";
import PhotoLibraryIcon from "@material-ui/icons/PhotoLibrary";
import InsertEmoticonIcon from "@material-ui/icons/InsertEmoticon";

const MessageSender = () => {
  const [input, setInput] = useState("");
  const [imageUrl, setImageUrl] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();

    //some database code will go in here

    setInput("");
    setImageUrl("");
  };

  return (
    <div className="messageSender">
      {/* messageSender-top */}
      <div className="messageSender-top">
        <Avatar />
        <form>
          <input
            value={input}
            className="messageSender-input"
            placeholder={`What's on your mind?`}
            onChange={(event) => {
              setInput(event.target.value);
            }}
          />
          <input
            value={imageUrl}
            placeholder={`image URL (Optional)`}
            onChange={(event) => {
              setImageUrl(event.target.value);
            }}
          />
          <button onClick={handleSubmit} type="submit">
            Hidden Submit
          </button>
        </form>
      </div>

      {/* messageSender-bottom  */}
      <div className="messageSender-bottom">
        <div className="messageSender-option">
          <VideocamIcon style={{ color: "red" }} />
          <h3>Live Video</h3>
        </div>

        <div className="messageSender-option">
          <PhotoLibraryIcon style={{ color: "green" }} />
          <h3>Photo/Video</h3>
        </div>

        <div className="messageSender-option">
          <InsertEmoticonIcon style={{ color: "orange" }} />
          <h3>Feeling/Activity</h3>
        </div>
      </div>
    </div>
  );
};

export default MessageSender;
