import React, { useEffect } from "react";
import {
  Container,
  Flex,
  Flexstart,
  Semibold,
  Wrap,
  LoadingContainer,
  Column,
  Row,
  BlueText, 
} from "../Styles/MainStyle";
import Song from "../components/Song";
import Back from "../components/Back";
import { useDispatch, useSelector } from "react-redux";
import { fetchSongsRequest } from "../redux/songsSlice";

const Years = () => {
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

  const sortedSongs = [...songs].sort((a, b) => b.publishYear - a.publishYear);

  const groupedSongs = sortedSongs.reduce((acc, song) => {
    let yearLabel;
    if (song.publishYear > 2020) {
      yearLabel = "Newest";
    } else if (song.publishYear < 1990) {
      yearLabel = "Oldest";
    } else {
      yearLabel = "Middle";
    }

    if (!acc[yearLabel]) {
      acc[yearLabel] = [];
    }
    acc[yearLabel].push(song);
    return acc;
  }, {});

  return (
    <Container>
      <Flex>
        <Semibold>Songs Grouped by Year</Semibold>
        <Back />
      </Flex>
      <Flexstart>
        <Wrap>
          {Object.keys(groupedSongs).map((yearLabel) => (
            <Row key={yearLabel}>
              <Column>
                <BlueText>{yearLabel}</BlueText>
                <Wrap>
                  {groupedSongs[yearLabel].map((song) => (
                    <Song key={song._id} song={song} />
                  ))}
                </Wrap>
              </Column>
            </Row>
          ))}
        </Wrap>
      </Flexstart>
    </Container>
  );
};

export default Years;
