import React, { useEffect } from "react";
import Song from "../components/Song";
import { useDispatch, useSelector } from "react-redux";
import {
  Container,
  Flex,
  Flexstart,
  LoadingContainer,
  Semibold,
  Wrap,
} from "../Styles/MainStyle";
import Back from "../components/Back";
import { fetchSongsRequest } from "../redux/songsSlice";
import CustomBox from "../Styles/CustomBox";
import { CircularProgress } from "@mui/material";

const Songs = () => {
  const songs = useSelector((state) => state.songs.list);
  const loading = useSelector((state) => state.songs.loading);
  const dispatch = useDispatch();

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

  const sortedSongs = songs.slice().sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));

  return (
    <Container>
      {sortedSongs.length === 0 ? (
        <LoadingContainer><p>No songs available</p></LoadingContainer>
      ) : (
        <>
          <Flex>
            <Semibold>All Songs</Semibold>
            <Back />
          </Flex>
          <Flexstart>
            <Wrap>
              {sortedSongs.map((song) => (
                <CustomBox key={song._id}>
                  <Song song={song} />
                </CustomBox>
              ))}
            </Wrap>
          </Flexstart>
        </>
      )}
    </Container>
  );
};

export default Songs;
