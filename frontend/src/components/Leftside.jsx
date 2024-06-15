import React from "react";
import { Heading, Subheading, Sidecontainer } from "../Styles/SideStyle";
import { StyledLink } from "../Styles/Link";

const Leftside = () => {
  return (
    <Sidecontainer>
      <Heading>Categories</Heading>
      <StyledLink to="/all">
        <Subheading>All</Subheading>
      </StyledLink>
      <StyledLink to="/genre">
        <Subheading>Genre</Subheading>
      </StyledLink>
      <StyledLink to="/year">
        <Subheading>Year</Subheading>
      </StyledLink>
      <StyledLink to='/create'>
        <Heading>Create Song</Heading>
      </StyledLink>
    </Sidecontainer>
  );
};

export default Leftside;
