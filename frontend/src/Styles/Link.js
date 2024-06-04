/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import styled from '@emotion/styled';
import { Link } from 'react-router-dom';
import { color, typography } from 'styled-system';

export const StyledLink = styled(Link)`
  text-decoration: none;  
  color: inherit;      
  ${color}
  ${typography}

  &:hover,
  &:focus {
    text-decoration: none;
    color: inherit;
  }
`;
