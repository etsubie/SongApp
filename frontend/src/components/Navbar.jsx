import React from "react";
import logo from "/images/logo.png";
import { Spacebetween, Logo, LogoText, SearchBox, SearchIconStyled, SearchInput, Gap20 } from "../Styles/headerStyle";
import { StyledLink } from "../Styles/Link";

const Navbar = () => {
  return (
    <Spacebetween>
      <StyledLink to='/'>
      <Gap20 >
        <Logo src={logo} />
        <LogoText>Music</LogoText>
      </Gap20>
      </StyledLink>
      <SearchBox>
        <SearchIconStyled/>
        <SearchInput/>
      </SearchBox>
    </Spacebetween>
  );
};

export default Navbar;
