import React from "react";
import "./Feed.css";
import StoryReel from "./StoryReel";
import MessageSender from "./MessageSender";
import Post from "./Post";

const Feed = () => {
  return (
    <div className="feed">
      <StoryReel />
      <MessageSender />
      <Post
        profilePicture="https://avatars.githubusercontent.com/u/61633659?v=4"
        message="A photo of the Harvard boys, making the epic facebook."
        timestamp="May 20"
        username="Haruna Oseni"
        image="https://qph.fs.quoracdn.net/main-qimg-8737e9b4dd1b249ebe39cfa88ab4dfbb"
      />

      <Post 
      profilePicture="https://avatars.githubusercontent.com/u/61633659?v=4"
      message="I'm back let's friggin code this facebook app!"
      timestamp="May 20"
      username="Haruna Oseni"
      />
    </div>
  );
};

export default Feed;
