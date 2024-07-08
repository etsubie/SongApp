import styled from "@emotion/styled";
import CustomBox from "./CustomBox";
import { space, color, layout, border, flexbox } from "styled-system";
import SearchIcon from '@mui/icons-material/Search';

export const Spacebetween = styled(CustomBox)`
  display: flex;
  justify-content: space-between;
  align-items: center;
  ${flexbox}
`;

export const Gap20 = styled(CustomBox)`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 20px;

  @media (max-width: 768px) {
    gap: 10px;
  }
`;

export const Logo = styled.img`
  width: 55px;
  height: auto;
  ${layout}

  @media (max-width: 768px) {
    width: 40px;
  }
`;

export const LogoText = styled.h1`
  font-size: 35px;
  font-weight: bold;
  color: ${(props) => props.theme.colors.text};
  ${color} 
  ${layout}

  @media (max-width: 768px) {
    font-size: 25px;
  }
`;

export const SearchBox = styled(CustomBox)`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #090808;
  border-radius: 50px;
  gap: 3px;
  border: solid 1px white;
  padding: 8px 25px;
  ${space}
  ${color}
  ${layout}
  ${border}
  ${flexbox}

  @media (max-width: 768px) {
    padding: 5px 15px;
  }
`;

export const SearchInput = styled.input`
  border: none;
  outline: none;
  background-color: #090808;
  color: white;
  ${space}
  ${color}
  ${layout}

  @media (max-width: 768px) {
    font-size: 14px;
  }
`;

export const SearchIconStyled = styled(SearchIcon)`
  color: gray;
  font-size: 24px;
  cursor: pointer;
  ${color}

  @media (max-width: 768px) {
    font-size: 20px;
  }
`;
