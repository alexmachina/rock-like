import React from "react";
import "./likeButton.css";
import Loader from "./components/Loader";
import ThumbsUpRegular from "./components/ThumbsUpRegular";
import ThumbsUpSolid from "./components/ThumbsUpSolid";
import useUserLikes from "./hooks/useUserLikes";

interface LikeProps {
  topic: string;
  user: string;
  live?: boolean;
}

const LikeButton: React.FC<LikeProps> = ({ topic, user, live }) => {
  const { liked, likes, loading, like, unlike } = useUserLikes({
    topic,
    user,
    live,
  });

  return (
    <div className="container">
      <Loader loading={loading}>
        <div className="like-container">
          {liked ? (
            <ThumbsUpSolid onClick={unlike} />
          ) : (
            <ThumbsUpRegular onClick={like} />
          )}
        </div>
        <span className="like-count">{likes}</span>
      </Loader>
    </div>
  );
};

export default LikeButton;
