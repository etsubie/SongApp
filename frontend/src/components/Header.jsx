/** @jsxImportSource @emotion/react */
import styled from '@emotion/styled';
import CustomBox from '../Styles/CustomBox';

export const Header = styled(CustomBox)`
  background-color: black;
  color: white;
  padding: ${props => props.theme.space[4]}px;
  text-align: center;
  justify-content: 'space-between';

`;
