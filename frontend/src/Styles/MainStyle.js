import styled from "@emotion/styled";
import CustomBox from "./CustomBox";
import { space, color, layout, border, flexbox } from "styled-system";
import backgroundImage from "/images/OIP.jpg";

export const HomeContainer = styled(CustomBox)`
  display: flex;
  flex-direction: column;
  gap: 40px;
  height: 100%;
  width: 100%;
  background: url(${backgroundImage}) no-repeat fixed center/cover;
  padding-left: 150px;
  padding-top: 100px;
  ${space}
  ${color}
  ${layout}
`;

export const HeroText = styled.span`
  color: white;
  font-size: 70px;
  ${color}
`;

export const StyledButton = styled.button`
  color: white;
  background-color: #0d7ae6;
  padding: 13px 30px;
  border-radius: 50px;
  border: none;
  cursor: pointer;
  ${color}
  ${border}
`;
export const Semibold = styled.span`
  color: ${(props) => props.theme.colors.text};
  font-size: 32px;
  font-weight: 600;
  ${color}
`;
export const Wrap = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 40px;
`;
export const Flexstart = styled(CustomBox)`
  padding: 40px 80px;
  display: flex;
  align-items: flex-start;
  ${flexbox}
`;

export const Spacearound = styled(CustomBox)`
  display: flex;
  gap: 30px;
  ${flexbox}
`;

export const Info = styled(CustomBox)`
  display: flex;
  flex-direction: column;
  gap: 10px;
  ${flexbox}
`;
export const Flex = styled(CustomBox)`
  display: flex;
  gap: 10px;
  ${flexbox}
`;
export const Center = styled(CustomBox)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 10px;
  ${flexbox}
`;

export const RowGap40 = styled(CustomBox)`
  display: flex;
  // justify-content: center;
  align-items: center;
  gap: 80px;
  margin-bottom: 80px;
`;
export const Column = styled(CustomBox)`
  display: flex;
  flex-direction: column;
`;

export const Container = styled(CustomBox)`
    display: flex;
    flex-direction: column;
    margin: 30px;
    gap: 30px;
    ${flexbox}
`
export const CustomForm = styled.form`
    display: flex;
    flex-direction: column;
    width:900px;
    gap: 20px;
    background-color: white;
    padding: 45px 20px;

    @media (max-width: 768px) {
      width: auto;
    }`
export const Input = styled.input`
   width: 100%;
    outline:none;
    padding:20px;
    height: 50px;
    font-size:18px;
    border: 1px solid #151515;
    border-radius: 20px;
  
    @media (max-width: 768px) {
      height: 45px;
      font-size:16px;
    }`
export const Submit = styled.button`
   width: 100%
    padding: 20px;
    height: 50px;
    cursor: pointer;
    border-radius: 20px;
    background-color: #0d7ae6;
    border: none;
    @media (max-width: 768px) {
      height: 45px;
    }`
export const Clear = styled.button`
   width: 100%
    padding: 20px;
    height: 45px;
    cursor: pointer;
    border-radius: 20px;
    background-color: #903030;
    border: none;
    @media (max-width: 768px) {
      height: 40px;
    }`