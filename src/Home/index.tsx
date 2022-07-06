import React from "react";
import { Container, Header, Title } from "./styles";
import bannerImg from "../assets/cover.png";
import { ImageBackground, Text } from "react-native";

export function Home() {
  return (
    <Container>
      <Header source={ bannerImg }>
        <Title>Home</Title>
      </Header>
    </Container>
  )
}