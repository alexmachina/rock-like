import React from "react";
import LikeButton from ".";
import styled from "styled-components";
import GlobalStyles from "../theme/GlobalStyles";

const pizza = { name: "pizza", icon: "🍕" };
const chocolate = { name: "chocolate", icon: "🍫" };
const beer = { name: "beer", icon: "🍺" };
const computers = { name: "cars", icon: "🚗" };
const userTopics = [
  {
    user: "Mary",
    topics: [beer, chocolate, computers, pizza],
  },
  {
    user: "John",
    topics: [beer, chocolate, computers, pizza],
  },
  {
    user: "Bob",
    topics: [beer, chocolate, computers, pizza],
  },
  {
    user: "alex.xmde@gmail.com",
    topics: [beer, chocolate, computers, pizza],
  },
  {
    user: "8599eef",
    topics: [beer, chocolate, computers, pizza],
  },
  {
    user: "simonsays93",
    topics: [beer, chocolate, computers, pizza],
  },
  {
    user: "Helena",
    topics: [beer, chocolate, computers, pizza],
  },
  {
    user: "Sam",
    topics: [beer, chocolate, computers, pizza],
  },
  {
    user: "Mariko",
    topics: [beer, chocolate, computers, pizza],
  },
  {
    user: "Yuri",
    topics: [beer, chocolate, computers, pizza],
  },
  {
    user: "Anderson",
    topics: [beer, chocolate, computers, pizza],
  },
  {
    user: "Ademir",
    topics: [beer, chocolate, computers, pizza],
  },
  {
    user: "andre-the-giant@wwe.com",
    topics: [beer, chocolate, computers, pizza],
  },
  {
    user: "toninho2021",
    topics: [beer, chocolate, computers, pizza],
  },
  {
    user: "15a3373",
    topics: [beer, chocolate, computers, pizza],
  },
  {
    user: "82",
    topics: [beer, chocolate, computers, pizza],
  },
  {
    user: "hello-user",
    topics: [beer, chocolate, computers, pizza],
  },
];

const Container = styled.div``;
const Dashboard = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

const UserContainer = styled.div`
  width: 15%;
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
  color: #252525;
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
