/** @jsxImportSource @emotion/react */
import styled from '@emotion/styled';
import CustomBox from '../Styles/CustomBox';

export const Header = styled(CustomBox)`
  background-color: black;
  color: white;
  padding: ${props => props.theme.space[3]}px;
  width:100%;
  text-align: center;
  justify-content: 'space-between';

`;
