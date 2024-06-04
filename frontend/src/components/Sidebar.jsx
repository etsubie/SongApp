/** @jsxImportSource @emotion/react */
import styled from '@emotion/styled';
import CustomBox from '../Styles/CustomBox';

export const Sidebar = styled(CustomBox)`
  background-color: ${props => props.theme.colors.background};
  padding: ${props => props.theme.space[3]}px;
`;
