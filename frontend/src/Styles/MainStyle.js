import styled from "@emotion/styled";
import CustomBox from "./CustomBox";
import { space, color, layout, border, flexbox } from "styled-system";
import backgroundImage from "/images/OIP.jpg";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";

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
export const Row = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  margin-bottom: 40px;

  ${space},
  ${layout},
  ${flexbox}
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

export const BlueText = styled.span`
  color: #0d7ae6;
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
  gap: 27px;
  position: relative;
  top: 35px;
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
  justify-content: center;
  align-items: center;
  gap: 80px;
  margin-bottom: 80px;
`;
export const ColumnGap40 = styled(CustomBox)`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 40px;
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
`;
export const CustomForm = styled.form`
  display: flex;
  flex-direction: column;
  width: 900px;
  gap: 30px;
  background-color: rgb(211, 209, 209);
  padding: 45px;

  @media (max-width: 768px) {
    width: auto;
  }
`;
export const Input = styled.input`
  width: 100%;
  outline: none;
  border: none;
  padding: 10px 20px;
  height: 50px;
  font-size: 18px;
  border-radius: 5px;

  @media (max-width: 768px) {
    height: 45px;
    font-size: 16px;
  }
`;
export const Select = styled.select`
  width: 100%;
  outline: none;
  border: none;
  color:gray;
  padding: 0px 15px;
  height: 50px;
  border-radius: 5px;
  font-size: 18px;

  @media (max-width: 768px) {
    height: 45px;
    font-size: 16px;
  }
`;
export const Filecntr = styled.div`
display:flex;
gap:20px;
align-items:center;
color:gray;
  width: 100%;
  padding: 10px 20px;
  height: 50px;
  background-color: white;
  border-radius: 5px;
  font-size: 18px;

  @media (max-width: 768px) {
    height: 45px;
    font-size: 16px;
  }
`;
export const Option = styled.option`
  width: 100%;
  outline: none;
  height: 100%;
`;
export const Submit = styled.button`
   width: 100%
    padding: 20px;
    height: 50px;
    cursor: pointer;
    border-radius: 5px;
    background-color: #0d7ae6;
    border: none;
    @media (max-width: 768px) {
      height: 45px;
    }`;
export const CLEAR = styled.button`
   width: 100%
    padding: 20px;
    height: 45px;
    cursor: pointer;
    border-radius: 5px;
    background-color: #903030;
    border: none;
    @media (max-width: 768px) {
      height: 40px;
    }`;

export const LoadingContainer = styled(CustomBox)`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  color: white;
  font-size: 40px;
`;
export const Edit = styled(EditIcon)`
  height: 45px;
  width: 50px;
  color: #0d7ae6;
  cursor: pointer;
`;
export const Delete = styled(DeleteIcon)`
  height: 45px;
  width: 50px;
  color: #991010;
  cursor: pointer;
`;
