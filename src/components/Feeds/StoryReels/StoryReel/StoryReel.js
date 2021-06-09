import React from "react";
import "./StoryReel.css";
import { Story } from "../../../../components";
import { useStateValue } from "../../../../State Provider/StateProvider";

const StoryReel = () => {
  const [{ user }, dispatch] = useStateValue();
  return (
    <div className="storyReel">
      <Story
        image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRf6MMd0IAwaJTPx-Gvvqu4fKsPoiNuHpyCkg&usqp=CAU"
        profileSrc={user.photoURL}
        title="Haruna Oseni"
      />

      <Story
        image="https://i.insider.com/5d6424302e22af09b75439e8?width=600&format=jpeg&auto=webp"
        profileSrc="https://pbs.twimg.com/profile_images/680250513951084544/yFwa_Sjd_400x400.jpg"
        title="Brain Chesky"
      />

      <Story
        image="https://s.wsj.net/public/resources/images/BN-SX178_0517AI_8H_20170410171642.jpg"
        profileSrc="https://pbs.twimg.com/profile_images/976723907708268544/QKPsU2Yt_400x400.jpg"
        title="Joe Gebbia"
      />

      <Story
        image="https://vz.cnwimg.com/thumb-400x/wp-content/uploads/2021/04/brian2.jpg"
        profileSrc="https://pbs.twimg.com/profile_images/1039744169026224128/Ne3vqMhM_400x400.jpg"
        title="Brian Armstrong"
      />

      <Story
        image="data:image/jpeg;base64,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"
        profileSrc="https://pbs.twimg.com/profile_images/556765270316814337/fLJPmSYb_400x400.jpeg"
        title="Andy Fang"
      />
    </div>
  );
};

export default StoryReel;
