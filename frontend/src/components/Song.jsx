import React from "react";
import { CustomCard, StyledImg, Title, Year } from '../Styles/SideStyle';
import { StyledLink } from "../Styles/Link";

const Song = ({song}) => {
  return (
    <StyledLink to={`/${song._id}`}>
      <CustomCard>
        <StyledImg src={song.imgUrl || "/images/OIP.jpg"} />
        <Title>{song.title}</Title>
        <Year>{song.publishYear}</Year>
      </CustomCard>
    </StyledLink>
  );
};

export default Song;
