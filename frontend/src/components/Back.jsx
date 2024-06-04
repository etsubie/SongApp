import React from 'react';
import  {useNavigate}  from 'react-router-dom';
import { ArrowBack } from '@styled-icons/material/ArrowBack';
import styled from 'styled-components';
import { space, color } from 'styled-system';

const Icon = styled(ArrowBack)`
  ${space}
  ${color}
  cursor: pointer;
`;

const Back = () => {
  const navigate = useNavigate();

  const handleBack = () => {
    navigate(-1);
  };

  return (
    <Icon size="24" color="white" m={2} onClick={handleBack} />
  );
};

export default Back;
