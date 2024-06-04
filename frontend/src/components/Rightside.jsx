import React from 'react'
import { Sidecontainer, CustomBar, CustomCard, StyledImg, Title, Year } from '../Styles/SideStyle'
import { Semibold } from '../Styles/MainStyle'
import { StyledLink } from '../Styles/Link'

const Rightside = () => {
  return (
    <Sidecontainer>
      <Semibold>Recent Songs</Semibold>
      <CustomBar/>
        <StyledLink to='/id'>
        <CustomCard>
        <StyledImg src='/images/OIP.jpg'/>
          <Title>Brofk</Title>
          <Year>1656</Year>
        </CustomCard>
        </StyledLink>
        <StyledLink to='/id'>
        <CustomCard>
          <StyledImg src='/images/OIP.jpg'/>
          <Title>Brofk</Title>
          <Year>1656</Year>
        </CustomCard>
        </StyledLink>
        <StyledLink to='/id'>
        <CustomCard>
        <StyledImg src='/images/OIP.jpg'/>
          <Title>Brofk</Title>
          <Year>1656</Year>
        </CustomCard>
        </StyledLink>
    </Sidecontainer>
  )
}

export default Rightside
