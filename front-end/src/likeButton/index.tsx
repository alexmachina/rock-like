import React from "react";
import Loader from "./components/Loader";
import ThumbsUpRegular from "./components/ThumbsUpRegular";
import ThumbsUpSolid from "./components/ThumbsUpSolid";
import useUserLikes from "./hooks/useUserLikes";
import styled from "styled-components";

interface LikeProps {
  topic: string;
  user: string;
  live?: boolean;
}

const Container = styled.div`
  display: inline-flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
`;

const LikeContainer = styled.div`
  color: #3a86ff;
  width: 32px;
  height: 32px;
`;

const LikeCount = styled.span`
  margin-left: 4px;
  color: #252525;
  font-size: 18px;
`;
const LikeButton: React.FC<LikeProps> = ({ topic, user, live }) => {
  const { liked, likes, loading, like, unlike } = useUserLikes({
    topic,
    user,
    live,
  });

  return (
    <Container>
      <Loader loading={loading}>
        <LikeContainer>
          {liked ? (
            <ThumbsUpSolid onClick={unlike} />
          ) : (
            <ThumbsUpRegular onClick={like} />
          )}
        </LikeContainer>
        <LikeCount>{likes}</LikeCount>
      </Loader>
    </Container>
  );
};

export default LikeButton;
