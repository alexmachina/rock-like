import React from "react";
import Presentation from "./Presentation";

interface LikeProps {
  topic: string;
  username: string;
}

const App: React.FC<LikeProps> = ({ topic, username }) => {
  // return <LikeButton topic="ufc-3" user="alex.xmde@gmail.com" />;
  return <Presentation />;
};

export default App;
