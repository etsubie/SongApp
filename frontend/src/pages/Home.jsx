import React from 'react';
import { Link } from 'react-router-dom';
import { HomeContainer, HeroText, StyledButton } from '../Styles/MainStyle';
import { Subheading } from '../Styles/SideStyle';

const Home = () => {
  return (
    <HomeContainer>
      <HeroText>
        Harmonize
        <br /> Your Soul
      </HeroText>
      <Link to="/all">
        <StyledButton><Subheading>Browse Songs</Subheading></StyledButton>
      </Link>
    </HomeContainer>
  );
};

export default Home;
