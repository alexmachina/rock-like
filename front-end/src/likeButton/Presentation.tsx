import React from "react";
import LikeButton from ".";
import styled from "styled-components";
import GlobalStyles from "../theme/GlobalStyles";

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
    user: "johndoe-39",
    topics: [pizza, chocolate, beer, computers],
  },
  {
    user: "admin@rockcontent.com",
    topics: [pizza, chocolate, beer, computers],
  },

  {
    user: "sarah-connor",
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

const User = styled.h2`
  font-size: 16px;
`;

const Presentation = () => {
  return (
    <Container>
      <Dashboard>
        <GlobalStyles />
        {userTopics.map(({ user, topics }) => {
          return (
            <UserContainer>
              <User>{user}</User>
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
