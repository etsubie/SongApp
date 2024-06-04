import React from "react";
import { CustomCard, StyledImg, Title, Year } from '../Styles/SideStyle';
import { StyledLink } from "../Styles/Link";

const Song = () => {
  return (
   
    <StyledLink to='/id'>
    <CustomCard>
      <StyledImg src='../images/OIP.jpg'/>
      <Title>Brofk</Title>
      <Year>1656</Year>
    </CustomCard>
    </StyledLink>
  );
};

export default Song;
