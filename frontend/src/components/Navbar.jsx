import React, { useState } from "react";
import logo from "/images/logo.png";
import { Spacebetween, Logo, LogoText, SearchBox, SearchIconStyled, SearchInput, Gap20 } from "../Styles/headerStyle";
import { StyledLink } from "../Styles/Link";
import { useNavigate } from "react-router-dom";

const Navbar = ({ setSearchTerm }) => {
  const [inputTerm, setInputTerm] = useState('');
  const navigate = useNavigate();

  const handleSearchChange = (event) => {
    setInputTerm(event.target.value);
  };

  const handleSearchSubmit = (event) => {
    event.preventDefault();
    setSearchTerm(inputTerm);
    navigate("/all");
    setInputTerm('');
  };

  return (
    <Spacebetween>
      <StyledLink to='/'>
        <Gap20>
          <Logo src={logo} />
          <LogoText>Music</LogoText>
        </Gap20>
      </StyledLink>
      <SearchBox>
        <SearchIconStyled onClick={handleSearchSubmit}/>
        <SearchInput
          value={inputTerm}
          placeholder="Search..."
          onChange={handleSearchChange}
        />
      </SearchBox>
    </Spacebetween>
  );
};

export default Navbar;
