import styled from "@emotion/styled";
import CustomBox from "./CustomBox";
import { color, flexbox, layout } from "styled-system";

export const Sidecontainer = styled(CustomBox)`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 30px;
    ${flexbox}
`
export const Heading = styled.span`
color: ${props => props.theme.colors.text};
    font-size: 20px;
    ${color}
`
export const Subheading = styled.span`
color: ${props => props.theme.colors.text};
font-size: 18px;
    ${color}
`
export const CustomCard = styled(CustomBox)`
    width: 250px;
    height: 290px;
    display: flex;
    flex-direction: column;
    gap: 3px;
  ${flexbox}
  ${layout}

  `
  
  export const CustomBar = styled.hr`
      width: 300px;
      color: white;
      margin-bottom: 30px;
    ${layout}
  `
  export const StyledImg = styled.img`
      width: 100%;
      height: 250px;
      border: solid 1px white;
      border-radius: 20px;
    ${layout}
  `
  export const Title = styled.span`
      font-size: 25px;
      color: white;
    ${color}
  `
  export const Year = styled.span`
      font-size: 18px;
      color: grey;
    ${color}
  `
 