import React, { useEffect } from "react";
import {
  Container,
  Flex,
  Semibold,
  Wrap,
  LoadingContainer,
  Column,
  Row,
  BlueText,
  Center,
  Flexstart,
} from "../Styles/MainStyle";
import Song from "../components/Song";
import Back from "../components/Back";
import { useDispatch, useSelector } from "react-redux";
import { fetchSongsRequest } from "../redux/songsSlice";

const Genres = () => {
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

  const genres = ["rock", "traditional", "hip hop", "reggae", "pop"];

  const groupedSongs = songs.reduce((acc, song) => {
    const genre = song.genre || "Others"; 
    if (!acc[genre]) {
      acc[genre] = [];
    }
    acc[genre].push(song);
    return acc;
  }, {});

  return (
    <Container>
      {songs.length === 0 ? (
        <LoadingContainer><p>No songs available</p></LoadingContainer>
      ) : (
    <>
      <Flex>
        <Semibold>Songs Grouped by Genre</Semibold>
        <Back />
      </Flex>
      <Flexstart>
        <Wrap>
          {genres.map((genre) => (
            groupedSongs[genre] && groupedSongs[genre].length > 0 && (
              <Row key={genre}>
                <Column>
                  <BlueText>{genre.charAt(0).toUpperCase() + genre.slice(1)}</BlueText>
                  <Wrap>
                    {groupedSongs[genre].map((song) => (
                      <Song key={song._id} song={song} />
                    ))}
                  </Wrap>
                </Column>
              </Row>
            )
          ))}
        </Wrap>
      </Flexstart></>)}
    </Container>
  );
};

export default Genres;
