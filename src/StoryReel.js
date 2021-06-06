import React from "react";
import "./StoryReel.css";
import Story from "./Story";

const StoryReel = () => {
  return (
    <div className="storyReel">
      <Story
        image="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTBHC2s4NFdzXEsVzvBPGjkrSerPQa-8XFuNtQ&usqp=CAU"
        profileSrc="https://avatars.githubusercontent.com/u/61633659?v=4"
        title="Haruna Oseni"
      />

      <Story
        image="https://mk0laterblogouwugirk.kinstacdn.com/wp-content/uploads/2019/01/How_Often-to-Post-to-Facebook-Stories.png"
        profileSrc="https://pbs.twimg.com/profile_images/988775660163252226/XpgonN0X_400x400.jpg"
        title="Bill Gates"
      />
      <Story
        image="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTBHC2s4NFdzXEsVzvBPGjkrSerPQa-8XFuNtQ&usqp=CAU"
        profileSrc="https://pbs.twimg.com/profile_images/477321402479955968/7d1U-LzK_400x400.jpeg"
        title="Elon Musk"
      />
      <Story
        image="https://mk0laterblogouwugirk.kinstacdn.com/wp-content/uploads/2019/01/How_Often-to-Post-to-Facebook-Stories.png"
        profileSrc="https://pbs.twimg.com/profile_images/1039744169026224128/Ne3vqMhM_400x400.jpg"
        title="Brian Armstrong"
      />
      <Story
        image="https://mk0laterblogouwugirk.kinstacdn.com/wp-content/uploads/2019/01/How_Often-to-Post-to-Facebook-Stories.png"
        profileSrc="https://pbs.twimg.com/profile_images/556765270316814337/fLJPmSYb_400x400.jpeg"
        title="Andy Fang"
      />
    </div>
  );
};

export default StoryReel;
