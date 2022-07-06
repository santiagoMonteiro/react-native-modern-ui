import React from "react";

import united from "../../assets/united.png";
import { Foundation, Title } from "../../screens/Home/styles";

import { Container, Image } from "./styles";

export function Card() {
  return (
    <Container>
      <Image source={united} resizeMode="contain" />

      <Title>Manchester United</Title>
      <Foundation>1878</Foundation>
    </Container>
  );
}
