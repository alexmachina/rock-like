import { useEffect, useState } from "react";

type IUserTopic = { user: string; topic: string; live?: boolean };
type IUseUserLikes = (
  userTopic: IUserTopic
) => {
  liked: boolean;
  likes: number;
  loading: boolean;
  like: () => Promise<void>;
  unlike: () => Promise<void>;
};

const baseUrl = `${process.env.REACT_APP_LIKE_API_BASE_URL}`;
const useUserLikes: IUseUserLikes = ({ user, topic, live }) => {
  const [liked, setLiked] = useState(false);
  const [likes, setLikes] = useState(0);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    const getLikes = async () => {
      const response = await fetch(`${baseUrl}/${topic}?user=${user}`);
      const userLikes = await response.json();
      const { likes, liked } = userLikes;

      setLikes(likes);
      setLiked(liked);
      setLoading(false);
    };

    if (live) {
      getLikes();
      setInterval(getLikes, 4000);
    } else {
      getLikes();
    }
  }, [live, topic, user]);

  const like = async () => {
    await fetch(`${baseUrl}/${topic}?user=${user}`, {
      method: "POST",
    });
    setLikes((prevLikes) => prevLikes + 1);
    setLiked(true);
  };

  const unlike = async () => {
    await fetch(`${baseUrl}/${topic}/?user=${user}`, {
      method: "DELETE",
    });

    setLikes((prevLikes) => prevLikes - 1);
    setLiked(false);
  };

  return { liked, likes, loading, like, unlike };
};

export default useUserLikes;
