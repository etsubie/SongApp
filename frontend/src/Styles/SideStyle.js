import styled from "@emotion/styled";
import CustomBox from "./CustomBox";
import { color, flexbox, layout } from "styled-system";

export const Sidecontainer = styled(CustomBox)`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 30px;

  @media (max-width: 768px) {
    gap: 15px;
  }

  ${flexbox}
`;

export const Heading = styled.span`
  color: ${(props) => props.theme.colors.text};
  font-size: 20px;

  @media (max-width: 768px) {
    font-size: 16px;
  }

  ${color}
`;

export const Subheading = styled.span`
  color: ${(props) => props.theme.colors.text};
  font-size: 18px;

  @media (max-width: 768px) {
    font-size: 14px;
  }

  ${color}
`;

export const CustomCard = styled(CustomBox)`
  width: 250px;
  height: 290px;
  display: flex;
  flex-direction: column;
  gap: 3px;

  @media (max-width: 768px) {
    width: 200px;
    height: 240px;
  }

  ${flexbox}
  ${layout}
`;

export const CustomBar = styled.hr`
  width: 300px;
  color: white;
  margin-bottom: 30px;

  @media (max-width: 768px) {
    width: 200px;
    margin-bottom: 20px;
  }

  ${layout}
`;

export const StyledImg = styled.img`
  width: 100%;
  height: 200px;
  border: solid 1px white;
  border-radius: 20px;

  @media (max-width: 768px) {
    height: 150px;
  }

  ${layout}
`;

export const DImg = styled.img`
  width: 100%;
  height: 300px;
  border: solid 1px white;
  border-radius: 20px;

  @media (max-width: 768px) {
    height: 200px;
  }

  ${layout}
`;

export const Title = styled.span`
  font-size: 25px;
  color: white;

  @media (max-width: 768px) {
    font-size: 20px;
  }

  ${color}
`;

export const Year = styled.span`
  font-size: 18px;
  color: grey;

  @media (max-width: 768px) {
    font-size: 14px;
  }

  ${color}
`;