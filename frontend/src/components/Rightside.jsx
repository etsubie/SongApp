import React, { useEffect } from "react";
import {
  Sidecontainer,
  CustomBar,
  CustomCard,
  StyledImg,
  Title,
  Year,
} from "../Styles/SideStyle";
import { LoadingContainer, Semibold } from "../Styles/MainStyle";
import { StyledLink } from "../Styles/Link";
import { useDispatch, useSelector } from "react-redux";
import { fetchSongsRequest } from "../redux/songsSlice";

const Rightside = () => {
  const songs = useSelector((state) => state.songs.list);
  const loading = useSelector((state) => state.songs.loading);
  const dispatch = useDispatch();

  const sortedSongs = songs.slice(0,3).sort((a, b) => new Date(b.publishYear) - new Date(a.publishYear));

  useEffect(() => {
    dispatch(fetchSongsRequest());
  }, [dispatch]);

  if (loading) {
    return (
      <LoadingContainer>
        <p>loading...</p>
      </LoadingContainer>
    );
  }

  return (
    <Sidecontainer>
      {sortedSongs.length === 0 ? (
        <LoadingContainer><p>No songs available</p></LoadingContainer>
      ) : (
    <>
    <Semibold>Recent Songs</Semibold>
    <CustomBar />
    {sortedSongs.map((song) => (
      <StyledLink key={song._id} to={`/${song._id}`}>
        <CustomCard>
          <StyledImg src={song.imgUrl || ' /images/OIP.jpg'} />
          <Title>{song.title.charAt(0).toUpperCase()+song.title.slice(1)}</Title>
          <Year>{song.publishYear}</Year>
        </CustomCard>
      </StyledLink>
    ))}      </>
  )}
  </Sidecontainer>
);
}
export default Rightside;
