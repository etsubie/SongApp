import React, { useEffect, useMemo } from "react";
import {
  Center,
  Column,
  Container,
  Delete,
  Edit,
  Flex,
  Flexstart,
  Info,
  RowGap40,
  Semibold,
  Wrap,
} from "../Styles/MainStyle";
import {
  CustomBar,
  CustomCard,
  DImg,
  StyledImg,
  Subheading,
  Title,
  Year,
} from "../Styles/SideStyle";
import { StyledLink } from "../Styles/Link";
import Back from "./Back";
import { useDispatch, useSelector } from "react-redux";
import { fetchSongsRequest, deleteSongRequest } from "../redux/songsSlice";
import { useNavigate, useParams } from "react-router-dom";
import moment from "moment";
import CustomAudioPlayer from "./CustomAudioPlayer";

const Details = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { list: songs, loading, error } = useSelector((state) => state.songs);

  useEffect(() => {
    dispatch(fetchSongsRequest());
  }, [dispatch]);

  const song = songs.find((song) => song._id === id);

  const similarSongs = useMemo(() => {
    return songs.filter((s) => s.genre === song?.genre && s._id !== id).slice(0, 3);
  }, [songs, song, id]);

  const handleEdit = (ID) => {
    navigate(`/edit/${ID}`);
  };

  const handleDelete = (ID) => {
    dispatch(deleteSongRequest(ID));
    navigate("/all");
  };

  if (loading) {
    return <Center>Loading...</Center>;
  }

  if (error) {
    return <Center>Error loading song details</Center>;
  }

  if (!song) {
    return <Center>Song not found</Center>;
  }

  return (
    <Container>
      <Flex>
        <Semibold>Details</Semibold>
        <Back />
      </Flex>
      <Flexstart>
        <RowGap40>
          <CustomCard>
            <DImg src={song.imgUrl || "/images/OIP.jpg"} alt="Song Cover" />
          </CustomCard>
          <Info>
            <Semibold>{song.title.charAt(0).toUpperCase() + song.title.slice(1)}</Semibold>
            <Column>
              <Subheading>{song.publishYear}</Subheading>
              <Subheading>{song.genre.charAt(0).toUpperCase() + song.genre.slice(1)}</Subheading>
            </Column>
            <Column>
              <Year>Singer: {song.singer.charAt(0).toUpperCase() + song.singer.slice(1)}</Year>
              <Year>{moment(song.createdAt).fromNow()}</Year>
            </Column>
            <RowGap40>
              <CustomAudioPlayer audioSrc={song.audio} />
              <Edit onClick={() => handleEdit(song._id)} />
              <Delete onClick={() => handleDelete(song._id)} />
            </RowGap40>
          </Info>
        </RowGap40>
      </Flexstart>
      <Center>
        {similarSongs.length > 0 && (
          <>
            <Semibold>Similar Songs</Semibold>
            <CustomBar />
            <Wrap>
              {similarSongs.map((similarSong) => (
                <StyledLink key={similarSong._id} to={`/${similarSong._id}`}>
                  <CustomCard>
                    <StyledImg
                      src={similarSong.imgUrl || "/images/OIP.jpg"}
                      alt="Song Image"
                    />
                    <Title>{similarSong.title}</Title>
                    <Year>{similarSong.publishYear}</Year>
                  </CustomCard>
                </StyledLink>
              ))}
            </Wrap>
          </>
        )}
      </Center>
    </Container>
  );
};

export default Details;
