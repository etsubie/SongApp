import React from "react";
import {
  Center,
  Column,
  Container,
  Flex,
  Flexstart,
  Info,
  RowGap40,
  Semibold,
  Spacearound,
  StyledButton,
} from "../Styles/MainStyle";
import {
  CustomBar,
  CustomCard,
  StyledImg,
  Subheading,
  Title,
  Year,
} from "../Styles/SideStyle";
import { StyledLink } from "../Styles/Link";
import Back from "./Back";

const Detials = () => {
  return (
    <Container>
      <Flex>
        <Semibold>Details</Semibold>
        <Back />
      </Flex>
      <Flexstart>
        <RowGap40>
          <CustomCard>
            {" "}
            <StyledImg src="/images/OIP.jpg" />
          </CustomCard>
          <Info>
            <Semibold>Bgegh</Semibold>
            <Column>
              <Subheading>2023</Subheading>
              <Subheading>Rock</Subheading>
            </Column>
            <Column>
              <Year>Created by Etsub</Year>
              <Year>1hr 3mn</Year>
            </Column>
            <StyledButton>Play Song</StyledButton>
          </Info>
        </RowGap40>
      </Flexstart>
      <Center>
        <Semibold>Similar Songs</Semibold>
        <CustomBar />
        <Spacearound>
          <StyledLink to="/id">
            <CustomCard>
              <StyledImg src="../images/OIP.jpg" />
              <Title>Brofk</Title>
              <Year>1656</Year>
            </CustomCard>
          </StyledLink>
          <StyledLink to="/id">
            <CustomCard>
              <StyledImg src="../images/OIP.jpg" />
              <Title>Brofk</Title>
              <Year>1656</Year>
            </CustomCard>
          </StyledLink>
          <StyledLink to="/id">
            <CustomCard>
              <StyledImg src="../images/OIP.jpg" />
              <Title>Brofk</Title>
              <Year>1656</Year>
            </CustomCard>
          </StyledLink>
        </Spacearound>
      </Center>
    </Container>
  );
};

export default Detials;
