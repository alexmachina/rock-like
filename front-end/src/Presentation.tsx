import React from "react";
import LikeButton from "./likeButton";
import styled from "styled-components";
import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
body {
    font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
}
`;

const pizza = { name: "pizza", icon: "🍕" };
const chocolate = { name: "chocolate", icon: "🍫" };
const beer = { name: "chocolate", icon: "🍺" };
const computers = { name: "cars", icon: "🚗" };
const userTopics = [
  {
    user: "alex.xmde@gmail.com",
    topics: [pizza, chocolate, beer, computers],
  },

  {
    user: "gabrielly",
    topics: [pizza, chocolate, beer, computers],
  },
  {
    user: "alex.xmde2@gmail.com",
    topics: [pizza, chocolate, beer, computers],
  },

  {
    user: "toninho salsicho",
    topics: [pizza, chocolate, beer, computers],
  },
  {
    user: "alex.xmde3@gmail.com",
    topics: [pizza, chocolate, beer, computers],
  },

  {
    user: "Zezinho",
    topics: [pizza, chocolate, beer, computers],
  },
];

const Container = styled.div``;
const Dashboard = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

const UserContainer = styled.div`
  width: 33%;
`;

const TopicContainer = styled.div`
  width: 100%;
  font-size: 24px;
`;

const Topic = styled.span`
  margin-right: 12px;
`;

const RefreshButton = styled.button`
  background-color: #254244;
  color: white;
  outline: none;
  border: none;
  width: 120px;
  height: 50px;
`;

const Presentation = () => {
  const refresh = () => window.location.reload();
  return (
    <Container>
      <RefreshButton onClick={refresh}>Refresh</RefreshButton>
      <Dashboard>
        <GlobalStyles />
        {userTopics.map(({ user, topics }) => {
          return (
            <UserContainer>
              <h2>{user}</h2>
              {topics.map((topic) => (
                <TopicContainer>
                  <Topic>{topic.icon}</Topic>
                  <LikeButton user={user} topic={topic.name} live />
                </TopicContainer>
              ))}
            </UserContainer>
          );
        })}
      </Dashboard>
    </Container>
  );
};

export default Presentation;
